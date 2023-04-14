/*
The process.disconnect method in Node.js is used to disconnect an IPC channel between a parent process and a child process. 
The process.disconnect method can be called by either the parent process or the child process to terminate the IPC communication channel.

The process.disconnect method is only available in a multi-process Node.js application. 
In a single-process application, the process.disconnect method is not available.
*/


const { fork } = require('child_process');

const child = fork('./child.js');

child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

child.on('disconnect', () => {
  console.log('Child process has been disconnected');
});

child.disconnect();

/*
Child process has been disconnected
Child process exited with code 0 and signal null
*/
