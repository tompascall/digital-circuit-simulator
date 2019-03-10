module.exports = () => {
  const agenda = {
    segments: [],
    currentTime: 0,
    time: 0,
    isEmpty(segments) {
      return (segments.length === 0);
    },
    first() {

    },
    removeFirstAgendaItem() {
      const queue = agenda.getSegmentQueue(agenda.firstSegment());
      queue.delete();
      if (queue.isEmpty()) {
        agenda.segments = agenda.restSegments(agenda.segments);
      }
    },
    addToAgenda(actionTime, action) {
      agenda.actionTime = actionTime;
      agenda.action = action;
      if (agenda.belongsBefore(agenda.segments)) {
        agenda.segments = [agenda.makeNewTimeSegment(), ...agenda.segments];
      } else {
        agenda.addToSegments(agenda.segments, action);
      }
    },
    belongsBefore(segments) {
      return (agenda.isEmpty(segments) ||
        agenda.actionTime < agenda.getSegmentTime(segments[0]));
    },
    getCurrentTime() {
      return agenda.currentTime;
    },
    setCurrentTime(time) {
      agenda.currentTime = time;
    },
    getSegments() {
      return agenda.segments;
    },
    setSegments(segments) {
      agenda.segments = segments;
    },
    afterDelay(delay, action) {
      agenda.addToAgenda(delay + agenda.getCurrentTime(), action);
    },
    makeNewTimeSegment() {
      const queue = agenda.makeQueue();
      queue.insert(agenda.action);
      return agenda.makeTimeSegment(agenda.actionTime, queue);
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
    firstSegment() {
      return agenda.segments[0];
    },
    restSegments(segments) {
      return segments.slice(1);
    },
    addToSegments(segments, action) {
      if (agenda.actionTime === agenda.getSegmentTime(segments[0])) {
        agenda.getSegmentQueue(segments[0]).insert(action);
      } else {
        const rest = agenda.restSegments(segments);
        if (agenda.belongsBefore(rest)) {
          agenda.segments = [segments[0], agenda.makeNewTimeSegment(), ...rest];
        } else {
          agenda.addToSegments(rest, action);
        }
      }
    },
    makeQueue() {
      let queue = [];
      return {
        insert(action) { queue = [action, ...queue] },
        delete() { queue.pop() },
        isEmpty() { return queue.length === 0; },
        getFront() { return queue[queue.length - 1] }
      };
    },
    firstAgendaItem() {
      const firstSegment = agenda.firstSegment();
      agenda.setCurrentTime(agenda.getSegmentTime(firstSegment));
      return agenda.getSegmentQueue(firstSegment).getFront();
    },
    propagate() {
      if (agenda.isEmpty(agenda.segments)) {
        console.log('Done');
      } else {
        agenda.firstAgendaItem()();
        agenda.removeFirstAgendaItem();
        agenda.propagate();
      }
    }
  };
  return agenda;
};

