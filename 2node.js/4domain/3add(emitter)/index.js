/*
In Node.js, the domain module is used for handling multiple asynchronous operations as a single group. 
An "emitter" is an object that emits events, and it can be added to a domain using the domain.add(emitter) method.

When an emitter is added to a domain, any errors emitted by the emitter will be caught by the domain, allowing you to handle the errors in a central location, 
instead of having to add error handling code to each individual event listener.
*/

const domain = require('domain')
const { EventEmitter } = require('stream')

const emitter = new EventEmitter();

// this will be the first priority for catching the error
// emitter.on('error', (err) => {
//     console.log(`Error Event: ${err}`);
// })

const errorDomain = domain.create()

errorDomain.on('error', (err) => {
    console.log(`caught Error: ${err}`);
})

errorDomain.add(emitter)

emitter.emit('error', new Error('Oops, something went wrong!'))

/*
caught Error: Error: Oops, something went wrong!
*/
