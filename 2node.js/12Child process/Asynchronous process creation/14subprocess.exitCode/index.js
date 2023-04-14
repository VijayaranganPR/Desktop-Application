/*
The exitCode property is a property of a child process object returned by the child_process.spawn(), child_process.exec(), 
or child_process.fork() methods in Node.js. It represents the exit code of a child process that has finished executing.
*/

const {spawn} = require('child_process')

const child = spawn('node',['child.js'])

child.on('error',(err) => console.log(err.toString()))

child.stderr.on('data', (data) => console.log(data.toString()))

child.stdout.on('data', (data) => console.log(data.toString()))

child.on('close', (code) => console.log('child process exited with exit code ', child.exitCode))
/*
Hello, World!

child process exited with exit code  0
*/