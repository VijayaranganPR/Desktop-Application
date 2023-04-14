const event = require('events');

const eventEmitter = new event();

eventEmitter.on('click',() => {})
eventEmitter.on('click',() => {})
eventEmitter.once('click',() => {})

console.log(eventEmitter.listeners('click'))
/*
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]
*/