import Action from './action';
import Time from './time';
import Segments from './segments';

export default interface Agenda {
  simulationTime: Time;
  segments: Segments;
  afterDelay(delay: Time, action: Action): void;
  getSimulationTime(): Time;
  propagate(): void;
  addToAgenda(actionTime: Time, action: Action): void;
  belongsBeforeAllSegment(actionTime): boolean;
  insertBeforeAllSegments(actionTime: Time, action: Action): void;
  addToAllSegments(actionTime: Time, action: Action);
  getFirstAgendaAction(): Action;
  setSimulationTimeToFirstSegmentTime(): void;
  setSimulationTime(time: Time): void;
  removeFirstAgendaItem(): void;
}
