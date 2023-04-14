/*
Receive a single message from a given MessagePort. 
If no message is available, undefined is returned, 
otherwise an object with a single message property that contains the message payload, 
corresponding to the oldest message in the MessagePort's queue.
*/

const {MessageChannel, receiveMessageOnPort} = require('worker_threads')

const {port1, port2} = new MessageChannel()

port1.postMessage('Message from port 1')

console.log(receiveMessageOnPort(port2))
// { message: 'Message from port 1' }

console.log(receiveMessageOnPort(port2))
// undefined