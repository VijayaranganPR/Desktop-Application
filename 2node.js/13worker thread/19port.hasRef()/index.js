/*
The hasRef() method in JavaScript is used to determine if a MessagePort object has a non-zero reference count.

When a MessagePort object is created, it has a reference count of 1. 
You can increment the reference count using the ref() method, and decrement it using the unref() method. 
The hasRef() method returns a Boolean value indicating whether the MessagePort object has a non-zero reference count.
*/

const {MessageChannel} = require('worker_threads')

const {port1} = new MessageChannel()


console.log(port1.hasRef())     // false

port1.ref()

console.log(port1.hasRef())     // true

port1.unref()

console.log(port1.hasRef())     // false
