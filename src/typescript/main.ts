import createWire from './create-wire';
import probe from './probe';
import createAgenda from './create-agenda';
import setupAndGate from './setup-and-gate';
import setupOrGate from './setup-or-gate';
import setupInverter from './setup-inverter';

const myAgenda = createAgenda();

const halfAdder = (a, b, s, c) => {
  const d = createWire();
  const e = createWire();
  setupOrGate(a, b, d, 5, myAgenda);
  setupAndGate(a, b, c, 3, myAgenda);
  setupInverter(c, e, 2, myAgenda);
  setupAndGate(d, e, s, 3, myAgenda);
  console.log('Half adder initialized');
};

const input1 = createWire();
const input2 = createWire();
const sum = createWire();
const carry = createWire();

probe('sum', sum, myAgenda);
probe('carry', carry, myAgenda);
halfAdder(input1, input2, sum, carry);
input1.setSignal(1);
myAgenda.propagate();
input2.setSignal(1);
myAgenda.propagate();
