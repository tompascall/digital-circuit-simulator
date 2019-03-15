import Action from './action';

interface ActionQueue {
  insert(action: Action): void;
  delete(): void;
  isEmpty(): boolean;
  getFront(): Action;
}

export default ActionQueue;
