const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
function print(a,b){
    console.log('system has been loged out'+ ', the addition of two numbers is ' + (a+b))
}

eventEmitter.on('loggedOut', print)
eventEmitter.emit('loggedOut', 100, 10)             // triggered

eventEmitter.off('loggedOut', print)
eventEmitter.emit('loggedOut', 100, 10)             // won't be triggered

