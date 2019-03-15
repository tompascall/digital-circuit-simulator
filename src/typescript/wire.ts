import Signal from './signal';
import Action from './action';

interface Wire {
  signal: Signal;
  actions: Action[];
  getSignal(): Signal;
  setSignal(s: Signal): void;
  addAction(a: Action): void;
}

export default Wire;