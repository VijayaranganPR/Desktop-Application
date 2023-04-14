const event = require('events');

const eventEmitter = new event();

eventEmitter.on('click',() => {})
eventEmitter.on('click',() => {})
eventEmitter.on('click',() => {})

console.log(eventEmitter.eventNames())    
//  [ 'click' ]
