import Segment from './segment';
import Time from './time';
import Action from './action';
import createActionQueue from './create-action-queue';

const createTimeSegment = (time: Time, action: Action): Segment => {
  const actionQueue = createActionQueue();
  actionQueue.insert(action);
  return {
    segment: [time, actionQueue],
    getSegmentTime() {
      return this.segment[0];
    },
    getSegmentQueue() {
      return this.segment[1];
    }
  };
};

export default createTimeSegment;
