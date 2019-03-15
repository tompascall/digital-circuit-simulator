import Agenda from './agenda';
import Time from './time';
import createSegments from './create-segments';
import createTimeSegment from './create-time-segment';
import Action from './action';

export default function CreateAgenda (): Agenda {
  return {
    simulationTime: 0,
    segments: createSegments(),
    afterDelay(delay, action): void {
      this.addToAgenda(delay + this.getSimulationTime(), action);
    },
    getSimulationTime(): Time {
      return this.simulationTime;
    },
    propagate(): void {
      if (this.segments.isEmpty()) {
        console.log('Done');
      } else {
      this.setSimulationTimeToFirstSegmentTime();
        const firstAgendaAction = this.getFirstAgendaAction();
        firstAgendaAction();
        this.removeFirstAgendaItem();
        this.propagate();
      }
    },
    addToAgenda(actionTime, action): void {
      if (this.belongsBeforeAllSegment(actionTime)) {
        this.insertBeforeAllSegments(actionTime, action);
      } else {
        this.addToAllSegments(actionTime, action);
      }
    },
    insertBeforeAllSegments(actionTime, action): void {
      this.segments.insertBefore(createTimeSegment(actionTime, action));
    },
    belongsBeforeAllSegment(actionTime): boolean {
      return this.segments.belongsBefore(actionTime);
    },
    addToAllSegments(actionTime, action): void {
      this.segments.insert(actionTime, action);
    },
    getFirstAgendaAction(): Action {
      return this.segments.first().getSegmentQueue().getFront();
    },
    setSimulationTimeToFirstSegmentTime(): void {
      const firstSegment = this.segments.first();
      this.setSimulationTime(firstSegment.getSegmentTime());
    },
    setSimulationTime(time: Time): void {
      this.simulationTime = time;
    },
    removeFirstAgendaItem(): void {
      const queue = this.segments.first().getSegmentQueue();
      queue.delete();
      if (queue.isEmpty()) {
        this.segments = createSegments(this.segments.rest());
      }
    }
  };
};