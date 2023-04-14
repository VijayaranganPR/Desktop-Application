/*
The close() method in JavaScript is used to close a communication port, such as a MessagePort or a DedicatedWorkerGlobalScope.port object.

This method is used to terminate the connection between the two ends of a communication port, 
preventing any further messages from being sent or received. Once a port is closed, it cannot be reopened.
*/

const {MessageChannel} = require('worker_threads')

const {port1, port2} = new MessageChannel()

port2.on('message', (message) => console.log(message))

port1.postMessage('Message from port 1')
port1.close()


/*
Message from port 1
*/