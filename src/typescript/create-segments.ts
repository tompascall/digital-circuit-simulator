import Segments from './segments';
import Segment from './segment';
import Time from './time';
import Action from './action';
import createTimeSegment from './create-time-segment';

const createSegments = function(segments: Segment[] = []): Segments {
  return {
    segments,
    isEmpty(): boolean {
      return !this.segments.length;
    },
    isEmptyOf(segments: Segment[]): boolean {
      return !segments.length;
    },
    all(): Segment[] {
      return this.segments;
    },
    first(): Segment {
      return this.segments[0];
    },
    firstOf(segments: Segment[]): Segment {
      return segments[0];
    },
    rest(): Segment[] {
      return this.segments.slice(1);
    },
    restOf(segments: Segment[]): Segment[] {
      return segments.slice(1);
    },
    insertBefore(segment: Segment): void {
      this.segments = [segment, ...this.segments];
    },
    belongsBeforeOf(segments: Segment[], actionTime: Time): boolean {
      return (this.isEmptyOf(segments) ||
        actionTime < this.firstOf(segments).getSegmentTime());
    },
    belongsBefore(actionTime: Time): boolean {
      return this.belongsBeforeOf(this.segments, actionTime);
    },
    insert(actionTime: Time, action: Action) {
      this.insertTo(this.segments, actionTime, action);
    },
    insertTo(segments: Segment[], actionTime: Time, action: Action) {
      if (actionTime === this.firstOf(segments).getSegmentTime()) {
        this.firstOf(segments).getSegmentQueue().insert(action);
      } else {
        const restSegments = this.restOf(segments);
        if (this.belongsBeforeOf(restSegments, actionTime)) {
          this.segments = [this.first(), createTimeSegment(actionTime, action), ...restSegments];
        } else {
          this.insertTo(restSegments, actionTime, action);
        }
      }
    }
  };
};
export default createSegments;
