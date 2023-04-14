/*
child_process.spawn() is a method in Node.js used to spawn a new process. It takes the following arguments:

command: Required. The command to run in the new process.
args: Optional. An array of string arguments to pass to the command.
options: Optional. An object containing options for the new process. Some common options include:
cwd: The current working directory of the new process.
env: An object containing environment variables to be passed to the new process.
stdio: An array specifying how to handle the standard input, output, and error streams.
*/

const child_process = require('child_process')

const child = child_process.spawn('node',['child.js'])

child.on('error', (err) => {throw err})

child.stderr.on('data', (data) => console.log(data.toString()))

child.stdout.on('data', (data) => console.log(data.toString()))

child.on('close', (code) => console.log('child process exited with code '+ code))

/*
Hello, World!
*/