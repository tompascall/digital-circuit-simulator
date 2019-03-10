const getWire = require('./wire');
const getAgenda = require('./agenda');
const getOrGate = require('./orGate');
const getAndGate = require('./andGate');
const getInverter = require('./inverter');

const probe = (name, wire, agenda) => {
  wire.addAction(() => {
    console.log(`\n${name} ${agenda.getSimulationTime()}\nNew value = ${wire.getSignal()}`);
  });
};

const myAgenda = getAgenda();

const halfAdder = (a, b, s, c) => {
  const d = getWire();
  const e = getWire();
  getOrGate(a, b, d, 5, myAgenda);
  getAndGate(a, b, c, 3, myAgenda);
  getInverter(c, e, 2, myAgenda);
  getAndGate(d, e, s, 3, myAgenda);
  console.log('Half adder initialized');
};

const input1 = getWire();
const input2 = getWire();
const sum = getWire();
const carry = getWire();

probe('sum', sum, myAgenda);
probe('carry', carry, myAgenda);
halfAdder(input1, input2, sum, carry);
input1.setSignal(1);
myAgenda.propagate();
input2.setSignal(1);
myAgenda.propagate();