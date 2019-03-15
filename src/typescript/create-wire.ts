import Wire from './wire';
import Action from './action';

export default function createWire(): Wire {
  return {
    signal: 0,
    actions: [],
    getSignal() {
      return this.signal;
    },
    setSignal(signal) {
      if (this.signal !== signal) {
        this.signal = signal;
        this.actions.forEach(a => a());
      }
    },
    addAction(action) {
      this.actions.push(action);
      action();
    },
  };
};