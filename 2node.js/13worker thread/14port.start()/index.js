/*
The start() method in JavaScript is used to start a MessagePort object, allowing it to begin receiving messages.

This method is typically called automatically when a MessagePort is created, so you may not need to call it explicitly in most cases. 
However, if you have created a MessagePort and have not yet started it, you can use the start() method to begin receiving messages.
*/

const {MessageChannel} = require('worker_threads')

const {port1, port2} = new MessageChannel()

port1.postMessage('Message from port 1')
port1.close()

port2.start()
port2.on('message', (message) => console.log(message))

/*
Message from port 1
*/