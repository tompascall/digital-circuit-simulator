module.exports = () => {
  const wire = {
    signal: 0,
    actions: [],
    getSignal() {
      return wire.signal;
    },
    setSignal(signal) {
      if (wire.signal !== signal) {
        wire.signal = signal;
        wire.actions.forEach(a => a());
      }
    },
    addAction(action) {
      wire.actions.push(action);
      action();
    },
  };
  return wire;
};
