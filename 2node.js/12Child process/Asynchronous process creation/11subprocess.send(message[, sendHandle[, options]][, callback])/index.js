/*
The send method in Node.js is a method of the child process object returned by the child_process.fork() method. 
The send method allows you to send messages to the forked child process.
*/

const child_process = require('child_process')

const forked = child_process.fork('./child.js')

forked.send('Message from parent process')

forked.on('message', (message) => console.log(message))

/*
First message from child
Message from parent process
Message from child process
*/