/*
In Node.js, the process.send(message[, sendHandle[, options]][, callback]) method is used to send a message to the parent process. This method can be used to communicate between the parent process and child process in a Node.js application.

The message parameter is the message that is being sent to the parent process. It can be any JSON-serializable object.

The sendHandle parameter is an optional parameter that can be used to send a file descriptor or a TCP socket to the parent process.

The options parameter is an optional parameter that can be used to specify additional options for the message. It is an object that can have the following properties:

keepOpen: A Boolean that indicates whether the message channel should be kept open after the message is sent. The default value is false.
requireAck: A Boolean that indicates whether the parent process should send an acknowledgement message after receiving the message. The default value is false.
The callback parameter is an optional parameter that is a function that will be called when the acknowledgement message from the parent process is received. This function will be passed two arguments: the first is an error object, and the second is the acknowledgement message.
*/

const newegid = 100;


const { fork } = require('child_process');

const child = fork('child.js')

child.send('Message from parent')

child.on('message', (message) => console.log(message))

/*
Message from parent
Hello from child!
*/
