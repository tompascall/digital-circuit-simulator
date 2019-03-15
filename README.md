# Digital Circuit Simulator

This project is based on [one of the project](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-22.html#%_sec_3.3.4) of the book [Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sites/default/files/sicp/index.html). The original project was written in LISP. The current project is about implementing of the original algorithm with javascript using different approaches.

> Designing complex digital systems, such as computers, is an important engineering activity. Digital systems are constructed by interconnecting simple elements. Although the behavior of these individual elements is simple, networks of them can have very complex behavior. Computer simulation of proposed circuit designs is an important tool used by digital systems engineers. In this section we design a system for performing digital logic simulations. This system typifies a kind of program called an event-driven simulation, in which actions ("events") trigger further events that happen at a later astime, which in turn trigger more events, and so so.

As a demo, we simulate the working of the half adder circuit:

![half adder circuit](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/ch3-Z-G-25.gif)

This circuit contains AND, OR and INVERTER gates, and WIRES. If a signal being changed on a wire, it can trigger a change on other wires. The triggered change depends on the logic of the gate connected to the given wire. 

We can set delays for every gates. It means that if a signal changes in an input wire, this change will take effect on the output with a delay.

In the demo we set up the circuit, set signal on input A to 1, we check the effect. After that we set signal on Input B to 1, and we check the effect again. 

The half adder circuit is set up just for demo, you can build any circuit using these gates, setting up gates with any delays as you like, and you can extend the project building other kind of logical units.

## Prerequisites

You need [Node js](https://nodejs.org/en/download/) installed on your machine.

## Install project

```npm i```

## Implementations

### Freestyle

The implementation is quite close to the original implementation. We have an agenda with time segments based on the delays, and we use these segments to simulate events and how delays take effect on signals.

#### Run demo

```node src/freestyle/main.js```

#### Run tests

```npm test```

