/*
The stderr property in Node.js is a property of the child process object returned by the child_process.spawn() method. 
The stderr property is a readable stream that represents the standard error stream of the child process.
*/

const child_process = require('child_process')

const child = child_process.spawn('node',['child.js'])

child.on('error', (err) => {throw err})

child.stderr.on('data', (err) => {throw err.toString()})

child.stdout.on('data', (data) => console.log(data.toString()))

child.on('close', (code) => console.log('child process exited with code '+ code))

/*
Hello, World!
*/