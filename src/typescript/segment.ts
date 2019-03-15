import ActionQueue from './action-queue';
import Time from './time';

interface Segment {
  segment: [Time, ActionQueue];
  getSegmentTime(): Time;
  getSegmentQueue(): ActionQueue;
}

export default Segment;
