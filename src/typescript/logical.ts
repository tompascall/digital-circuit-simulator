import Signal from './signal';

export const not = (signal) =>
  (Signal.Low === signal) ? Signal.High : Signal.Low;

export const and = (signal1, signal2) =>
  (Signal.High === signal1 && Signal.High === signal2) ? Signal.High : Signal.Low;

export const or = (signal1, signal2) =>
  (Signal.Low === signal1 && Signal.Low === signal2) ? Signal.Low : Signal.High;
