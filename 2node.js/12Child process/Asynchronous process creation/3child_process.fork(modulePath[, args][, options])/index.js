/*
child_process.fork() is a method in Node.js used to spawn a new process and execute a specified module. 
It's similar to child_process.spawn(), but it's intended for use with Node.js files, 
as it automatically sets the execPath to the Node.js executable and passes the module to run as an argument.

It takes the following arguments:

modulePath: Required. The module to run in the new process.
args: Optional. An array of string arguments to pass to the module.
options: Optional. An object containing options for the new process. Some common options include:
cwd: The current working directory of the new process.
env: An object containing environment variables to be passed to the new process.
execArgv: An array of string arguments passed to the Node.js executable.
silent: If true, the child process's stdio streams will be piped to the parent process, otherwise they will be connected to null.
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