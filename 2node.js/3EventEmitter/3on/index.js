const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
eventEmitter.on('loggedOut',(a,b) => {
    console.log('system has been loged out'+ ', the addition of two numbers is ' + (a+b))
})

setTimeout(() => {
    eventEmitter.emit('loggedOut', 100, 10)}, 1000)

