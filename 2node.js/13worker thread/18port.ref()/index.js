/*
The ref() method in JavaScript is used to increment the reference count of a MessagePort object.

When a MessagePort object is created, it has a reference count of 1. 
If you need to keep the MessagePort object alive, even if it is not being used in your code, you can increment its reference count using the ref() method. 
This ensures that the MessagePort object will not be automatically closed when it is no longer being used.
*/

const {MessageChannel} = require('worker_threads')

const {port1} = new MessageChannel()

port1.ref()

setTimeout(() => {
    console.log(`releasing port1`);
    port1.unref()
})

/*
releasing port1
*/