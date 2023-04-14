const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
function print(a,b){
    console.log('system has been loged out'+ ', the addition of two numbers is ' + (a+b))
}

// event should need to be triggered only once
eventEmitter.once('loggedOut', print)

setTimeout(() => {
    eventEmitter.emit('loggedOut', 100, 10)     // this one only be triggered
    eventEmitter.emit('loggedOut', 100, 10)     // won't trigger
}, 1000)

