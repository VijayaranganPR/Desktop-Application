/*
child_process.execFile is a method in Node.js that runs a command in a new process. It takes in four parameters:

file: A string that specifies the file to be executed.
args (optional): An array of strings that specifies the arguments to be passed to the command.
options (optional): An object that specifies options for running the command.
callback (optional): A function that is called with the output and error messages of the command.
It returns a ChildProcess object, which is an instance of EventEmitter and can be used to communicate with the child process.
*/

const { execFile } = require('node:child_process');

execFile("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", (error, stdout, stderr) => {
  if (error)     throw error;
  if (stderr)     throw stderr;
  console.log(stdout);      // chrome will open

});
