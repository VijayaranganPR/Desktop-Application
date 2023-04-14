const event = require('events');

const eventEmitter = new event();

// setting only 2 listener as max 
eventEmitter.setMaxListeners(2);        // throw an warning

eventEmitter.on('click',() => console.log(1))
eventEmitter.on('click',() => console.log(2))
eventEmitter.on('click',() => console.log(3))

eventEmitter.emit('click')      // will execute all three events
/*
1
2
3
*/

// still 3 
console.log(eventEmitter.listenerCount('click'))    // 3
