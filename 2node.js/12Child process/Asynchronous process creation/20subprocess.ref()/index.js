/*
The child_process.ref() method in Node.js is used to prevent a child process created using the child_process.spawn(), child_process.exec(), or child_process.fork() methods from being terminated automatically when the parent process exits.

By default, when the parent process exits, the operating system will send the SIGTERM signal to all child processes, which will terminate them. By calling the ref() method, you can prevent a child process from being terminated automatically when the parent process exits.

*/

const {spawn} = require('child_process')

const child = spawn('node', ['child.js'])

child.ref()


