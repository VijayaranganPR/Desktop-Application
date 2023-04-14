const event = require('events');

const eventEmitter = new event();

eventEmitter.on('click',() => console.log(1))
eventEmitter.on('click',() => console.log(1))
eventEmitter.once('click',() => console.log(1))

console.log(eventEmitter.listeners('click'))
/*
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]        // this is once event
]
*/

console.log(eventEmitter.rawListeners('click'))
// once event will be denoted

/*
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function: bound onceWrapper] { listener: [Function (anonymous)] }
]
*/