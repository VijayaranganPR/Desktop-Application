const EventEmitter = require('events')

const eventEmitter = new EventEmitter()
function print(a,b){
    console.log('system has been loged out 1'+ ', the addition of two numbers is ' + (a+b))
}
function print2(a,b){
    console.log('system has been loged out 2'+ ', the addition of two numbers is ' + (a+b))
}
function print3(a,b){
    console.log('system has been loged out 3'+ ', the addition of two numbers is ' + (a+b))
}

eventEmitter.addListener('loggedOut', print)

eventEmitter.emit('loggedOut', 0, 1)             // triggered
eventEmitter.emit('loggedOut', 1, 10)             // triggered
eventEmitter.emit('loggedOut', 10, 100)             // triggered


eventEmitter.removeAllListeners('loggedOut')

eventEmitter.emit('loggedOut', 0, 1)             // won't be triggered
eventEmitter.emit('loggedOut', 1, 10)             // won't be triggered
eventEmitter.emit('loggedOut', 10, 100)             // won't be triggered
