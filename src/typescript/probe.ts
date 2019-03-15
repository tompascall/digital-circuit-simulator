import Wire from './wire';
import Agenda from './agenda';

const probe = (name: string, wire: Wire, agenda: Agenda) => {
  wire.addAction(() => {
    console.log(`\n${name} ${agenda.getSimulationTime()}\nNew value = ${wire.getSignal()}`);
  });
};

export default probe;