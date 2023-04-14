/*
The unref() method in JavaScript is used to decrement the reference count of a MessagePort object.

When a MessagePort object is created, it has a reference count of 1. 
You can increment the reference count using the ref() method, and decrement it using the unref() method. 
When the reference count of a MessagePort object reaches 0, the object is considered to be no longer in use and will be automatically closed.
*/

const {MessageChannel} = require('worker_threads')

const {port1} = new MessageChannel()

port1.ref();

setTimeout(() => {
  console.log('Releasing reference to port1');
  port1.unref();
}, 1000);

/*
Releasing reference to port1
*/