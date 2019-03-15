import Wire from './wire';
import Agenda from './agenda';
import Action from './action';
import Time from './time';
import { or } from './logical';

export default function setupOrGate(
  input1: Wire,
  input2: Wire,
  output: Wire,
  delay: Time,
  agenda: Agenda,
): void {
  const orInputAction: Action = () => {
    const newSignal = or(input1.getSignal(), input2.getSignal());
    agenda.afterDelay(delay, () => {
      output.setSignal(newSignal);
    });
  };
  input1.addAction(orInputAction);
  input2.addAction(orInputAction);
}