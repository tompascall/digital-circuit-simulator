import ActionQueue from './action-queue';
import Action from './action';

const createActionQueue = () => {
  let queue: Action[] = [];
  return {
    insert(action: Action) { queue = [action, ...queue] },
    delete(): void { queue.pop() },
    isEmpty(): boolean { return queue.length === 0; },
    getFront(): Action { return queue[queue.length - 1] }
  }
};

export default createActionQueue;
