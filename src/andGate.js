const { and } = require('./logical');

module.exports = (input1, input2, output, delay, agenda) => {
  const andGate = {
    andInput() {
      const newSignal = and(input1.getSignal(), input2.getSignal());
      agenda.afterDelay(delay, () =>
        output.setSignal(newSignal));
    },
  };

  input1.addAction(andGate.andInput);
  input2.addAction(andGate.andInput);
  return andGate;
};
