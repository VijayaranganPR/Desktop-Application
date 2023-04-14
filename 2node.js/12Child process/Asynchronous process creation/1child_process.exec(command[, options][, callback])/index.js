/*
child_process.exec is a method in Node.js for executing shell commands. It runs a shell command in a new process and buffers the output. The method takes three arguments:

command: A string containing the command to be executed.

options (optional): An object with options for the execution. Some of the most common options are:
    cwd: Current working directory of the child process.
    env: Environment key-value pairs.
    encoding: Encoding to use for the output.
    timeout: Timeout in milliseconds after which the child process will be killed.
    maxBuffer: Largest amount of data allowed on stdout or stderr.
    killSignal: Signal value to be used when the child process is killed.

callback (optional): A function to be called once the command has completed. The function takes two arguments: error and stdout. 
error will be set if there was an error executing the command, and stdout will contain the output of the command.
*/

const child_process = require('child_process')

child_process.exec('dir', (err, stdout, stderr) => {
    if(err) throw err;

    console.log(stdout)
    console.log(stderr)     /// the error comes after the command execution

})
/*

04-02-2023  00:58    <DIR>          .
04-02-2023  00:58    <DIR>          ..
04-02-2023  01:07               193 index.js
               1 File(s)            193 bytes
               2 Dir(s)  329,957,150,720 bytes free


*/