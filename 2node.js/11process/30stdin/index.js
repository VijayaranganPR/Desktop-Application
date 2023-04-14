/*
process.stdin is a readable stream in Node.js that represents the standard input of the current process. 
The standard input is typically connected to the console or terminal window where the Node.js script is running. 
It can be used to read input from the user, 
for example when the script prompts the user for input in the command line.
*/

const child_process = require('child_process')

const child = child_process.spawn('node', ['child.js'])

child.on('error', (err) => {throw err})

child.stderr.on('error', (err) => {throw err.toString()})

child.stdout.on('data', (data) => console.log(data.toString()))

child.stdin.write('Message from parent')
child.stdin.end()
/*
Message from child
Message from parent
*/
