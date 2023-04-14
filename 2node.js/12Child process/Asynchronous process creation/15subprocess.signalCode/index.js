/*
The signalCode property in Node.js is a property of the signal event that is emitted by the child process object returned by the child_process.spawn(), 
child_process.exec(), or child_process.fork() methods. 
The signalCode property is a string that indicates the signal that caused the child process to terminate.
*/

const { spawn } = require('child_process');

const child = spawn('ls', ['-lh', '/usr']);

child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

child.on('close', (code, signal) => {
  console.log(`Child process closed with code ${code} and signal ${signal}`);
});

child.on('disconnect', () => {
  console.log('Child process disconnected');
});

child.on('error', (error) => {
  console.error(`Child process error: ${error}`);
});

child.on('message', (message) => {
  console.log(`Child process message: ${message}`);
});

child.on('signal', (signal) => {
  console.log(`Child process terminated with signal: ${signal}`);
});
/*
Child process error: Error: spawn ls ENOENT
Child process closed with code -4058 and signal null
*/