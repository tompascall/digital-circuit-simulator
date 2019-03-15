import Wire from './wire';
import Agenda from './agenda';
import Action from './action';
import Time from './time';
import { not } from './logical';

export default function setupInverter(
  input1: Wire,
  output: Wire,
  delay: Time,
  agenda: Agenda,
): void {
  const notInputAction: Action = () => {
    const newSignal = not(input1.getSignal());
    agenda.afterDelay(delay, () => {
      output.setSignal(newSignal);
    });
  };
  input1.addAction(notInputAction);
}