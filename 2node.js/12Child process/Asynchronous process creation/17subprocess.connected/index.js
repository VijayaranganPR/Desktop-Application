/*
The subprocess.connected property in Node.js is a boolean that indicates whether the child process created using the child_process.fork method is still connected to its parent process.

A child process is considered connected as long as the IPC (Inter-Process Communication) channel between the parent process and the child process is open. When the child process terminates, the IPC channel closes, and the subprocess.connected property is set to false.


*/

const child_process = require('child_process')

const child = child_process.fork('child.js')

child.send('message from parent')

child.on('message', (message) => {
    console.log(message)
    console.log(child.connected, 'inside on message in parent')
})

child.on('close', (code) => {
    console.log(child.connected, 'inside close in parent')
})

console.log(child.connected, 'outside scope');
/*
true outside scope
message from parent
true inside on message in child
Message from child process
true inside on message in parent
false inside close in parent
*/
