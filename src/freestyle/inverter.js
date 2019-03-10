const { not } = require('./logical');

module.exports =  (input, output, delay, agenda) => {
  const inverter = {
    invertInput() {
      const newSignal = not(input.getSignal());
      agenda.afterDelay(delay, () =>
        output.setSignal(newSignal));
    },
  };

  input.addAction(inverter.invertInput);
  return inverter;
};
