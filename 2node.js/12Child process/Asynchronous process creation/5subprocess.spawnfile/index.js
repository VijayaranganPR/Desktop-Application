/*
The spawnfile property in Node.js is a property of the child process object returned by the child_process.spawn() method. 
The spawnfile property is a string that specifies the command that was passed to the spawn method.
*/

const {spawn} = require('child_process')

const child = spawn('node', ['app.js'])

console.log(`Child process spawn command: ${child.spawnfile}`)

child.on('exit', (code, signal) => console.log(`Child process exited with code ${code} and signal ${signal}`))

child.on('error', (error) => console.error(`Child process error: ${error}`))

/*
Child process spawn command: node
Child process exited with code 0 and signal null
*/
