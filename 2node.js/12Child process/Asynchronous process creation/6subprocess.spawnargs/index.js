/*
The spawnargs property in Node.js is a property of the child process object returned by the child_process.spawn() method. 
The spawnargs property is an array that contains the command and its arguments that were passed to the spawn method.
*/

const { spawn } = require('child_process');

const child = spawn('ls', ['-lh', '/usr']);

console.log(`Child process spawn command: ${child.spawnargs}`);

child.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

child.on('error', (error) => {
  console.error(`Child process error: ${error}`);
});


/*
Child process spawn command: ls,-lh,/usr
Child process error: Error: spawn ls ENOENT
*/