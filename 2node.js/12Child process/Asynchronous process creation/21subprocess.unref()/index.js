/*
The child_process.unref() method in Node.js is used to undo the effects of the child_process.ref() method. When you call the unref method on a child process, 
it allows the child process to be terminated automatically when the parent process exits, which is the default behavior.


*/

const {spawn} = require('child_process')

const child = spawn('node', ['child.js'])


child.ref()

setTimeout(() => {
    child.unref()
    console.log('Child process unreferenced');

}, 5000);
