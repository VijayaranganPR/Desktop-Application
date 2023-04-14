/*
The pid property in Node.js is a property of the child process object returned by the child_process.spawn(), child_process.exec(), or child_process.fork() methods. 
The pid property is the process ID of the child process, which is a unique identifier assigned by the operating system.
*/

const {spawn} = require('child_process')

const child = spawn('node', ['child.js'])

console.log(child.pid)

/*
17728       (will differ)
*/