module.exports = {
  make() {
    let queue = [];
    return {
      insert(action) { queue = [action, ...queue] },
      delete() { queue.pop() },
      isEmpty() { return queue.length === 0; },
      getFront() { return queue[queue.length - 1] }
    }
  },
};