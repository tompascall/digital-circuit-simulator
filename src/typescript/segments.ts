import Segment from './segment';
import Time from './time';
import Action from './action';

interface Segments {
  segments: Segment[];
  all(): Segment[];
  first(): Segment;
  firstOf(segments: Segment[]): Segment;
  isEmpty(): boolean;
  isEmptyOf(segments: Segment[]): boolean;
  insertBefore(segment: Segment): void;
  insert(actionTime: Time, action: Action): void;
  insertTo(segments: Segment[], actionTime: Time, action: Action): void;
  belongsBefore(actionTime: Time): boolean;
  belongsBeforeOf(segments: Segment[], actionTime: Time): boolean;
  rest(): Segment[];
  restOf(segments: Segment[]): Segment[];
}

export default Segments;
