const { or } = require('./logical');

module.exports = (input1, input2, output, delay, agenda) => {
  const orGate = {
    orInput() {
      const newSignal = or(input1.getSignal(), input2.getSignal());
      agenda.afterDelay(delay, () => {
        output.setSignal(newSignal);
      })
    },
  };

  input1.addAction(orGate.orInput);
  input2.addAction(orGate.orInput);
  return orGate;
};
