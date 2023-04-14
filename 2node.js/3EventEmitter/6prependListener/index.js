const event = require('events');

const eventEmitter = new event();


eventEmitter.on('click',() => console.log(1))
eventEmitter.prependListener('click',() => console.log(2))
eventEmitter.prependListener('click',() => console.log(3))

eventEmitter.emit('click')      
/*
3
2
1
*/


