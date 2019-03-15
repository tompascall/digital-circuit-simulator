import Wire from './wire';
import Agenda from './agenda';
import Action from './action';
import { and } from './logical';
import Time from './time';

export default function setupAndGate(
  input1: Wire,
  input2: Wire,
  output: Wire,
  delay: Time,
  agenda: Agenda,
): void {
  const andInputAction: Action = () => {
    const newSignal = and(input1.getSignal(), input2.getSignal());
    agenda.afterDelay(delay, () => {
      output.setSignal(newSignal);
    });
  };
  input1.addAction(andInputAction);
  input2.addAction(andInputAction);
}