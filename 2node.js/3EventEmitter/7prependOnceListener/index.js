const event = require('events');

const eventEmitter = new event();


eventEmitter.on('click',() => console.log(1))
eventEmitter.prependOnceListener('click',() => console.log(2))
eventEmitter.prependOnceListener('click',() => console.log(3))

eventEmitter.emit('click')
/*
3
2
1 
*/   
eventEmitter.emit('click')  
/*
1
*/