const q = require('./queue');

const rest = (xs) => xs.slice(1);

module.exports = () => {
  const agenda = {
    segments: [],
    simulationTime: 0,
    isEmpty(segments) {
      return (segments.length === 0);
    },
    removeFirstAgendaItem() {
      const queue = agenda.getFirstSegmentQueue();
      queue.delete();
      if (queue.isEmpty()) {
        agenda.segments = rest(agenda.segments);
      }
    },
    addToAgenda(actionTime, action) {
      if (agenda.belongsBeforeAllSegment(actionTime)) {
        agenda.segments.unshift(agenda.makeNewTimeSegment(actionTime, action));
      } else {
        agenda.addToAllSegments(action, actionTime);
      }
    },
    belongsBefore(segments, actionTime) {
      return (agenda.isEmpty(segments) ||
        actionTime < agenda.getSegmentTime(segments[0]));
    },
    belongsBeforeAllSegment(actionTime) {
      return agenda.belongsBefore(agenda.segments, actionTime);
    },
    getSimulationTime() {
      return agenda.simulationTime;
    },
    setSimulationTime(time) {
      agenda.simulationTime = time;
    },
    afterDelay(delay, action) {
      agenda.addToAgenda(delay + agenda.getSimulationTime(), action);
    },
    makeNewTimeSegment(actionTime, action) {
      const queue = q.make();
      queue.insert(action);
      return agenda.makeTimeSegment(actionTime, queue);
    },
    makeTimeSegment(time, queue) {
      return [time, queue];
    },
    getSegmentTime(segment) {
      return segment[0];
    },
    getSegmentQueue(segment) {
      return segment[1];
    },
    getFirstSegmentQueue() {
      return agenda.getSegmentQueue(agenda.firstSegment());
    },
    firstSegment() {
      return agenda.segments[0];
    },
    addToSegments(segments, action, actionTime) {
      if (actionTime === agenda.getSegmentTime(segments[0])) {
        agenda.getSegmentQueue(segments[0]).insert(action);
      } else {
        const restSegments = rest(segments);
        if (agenda.belongsBefore(restSegments, actionTime)) {
          agenda.segments = [segments[0], agenda.makeNewTimeSegment(actionTime, action), ...restSegments];
        } else {
          agenda.addToSegments(restSegments, action, actionTime);
        }
      }
    },
    addToAllSegments(action, actionTime) {
      agenda.addToSegments(agenda.segments, action, actionTime);
    },
    getFirstAgendaItem() {
      agenda.setSimulationTimeToFirstSegmentTime();
      return agenda.getFirstSegmentQueue().getFront();
    },
    setSimulationTimeToFirstSegmentTime() {
      const firstSegment = agenda.firstSegment();
      agenda.setSimulationTime(agenda.getSegmentTime(firstSegment));
    },
    propagate() {
      if (agenda.isEmpty(agenda.segments)) {
        console.log('Done');
      } else {
        const firstAgendaAction = agenda.getFirstAgendaItem();
        firstAgendaAction();
        agenda.removeFirstAgendaItem();
        agenda.propagate();
      }
    }
  };
  return agenda;
};

