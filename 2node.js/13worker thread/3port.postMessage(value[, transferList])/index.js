/*
The postMessage method in JavaScript is used to send a message to a communication port, such as a MessagePort or a DedicatedWorkerGlobalScope.port object.

It takes two arguments:

value (required): The message to be sent. This can be any value, including a primitive value, an object, or an array.

transferList (optional): An array of objects that should be transferred, rather than cloned, when sending the message. 
This can be used to transfer ownership of large, transferable objects between workers.
*/

const {MessageChannel} = require('worker_threads')

const {port1, port2} = new MessageChannel()

port1.postMessage('Message from port 1')
port1.close()
port2.on('message', (message) => console.log(message))

/*
Message from port 1
*/