/*
The subprocess.stdio property in Node.js refers to the standard input, output, and error streams that are used by a child process. 
The stdio property is an array of file descriptor objects that determine how the child process should communicate with its parent process. 
The file descriptors can be used to pipe data into the child process, to receive data from the child process, or 
to redirect data to and from a file. The default value of stdio is ['pipe', 'pipe', 'pipe'], 
which means that the standard input, output, and error streams will be connected to pipes, 
allowing data to be passed between the parent and child processes.
*/

const { spawn } = require('child_process');
const fs = require('fs');

const child = spawn('node', {
  stdio: ['ignore', fs.openSync('output.txt', 'w'), 'ignore']
});

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code} and signal ${signal}`);
});
