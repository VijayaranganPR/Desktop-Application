/*
child_process.execSync is a synchronous version of the child_process.exec method in Node.js. 
It runs a shell command in a new process and returns the output as a string. The method takes two arguments:

command: A string containing the command to be executed.

options (optional): An object with options for the execution. Some of the most common options are:
    cwd: Current working directory of the child process.
    env: Environment key-value pairs.
    encoding: Encoding to use for the output.
    timeout: Timeout in milliseconds after which the child process will be killed.
    maxBuffer: Largest amount of data allowed on stdout or stderr.
    killSignal: Signal value to be used when the child process is killed.


Note that child_process.execSync is blocking, meaning that it will block the Node.js process until the command has completed. 
It is therefore generally recommended to use child_process.exec instead, which is non-blocking and uses a callback function.
*/

const child_process = require('child_process')

try{
    output = child_process.execSync('dir')
    console.log(output.toString())
}catch(err){
    console.log(err.toString())
} 
/*

04-02-2023  01:11    <DIR>          .
04-02-2023  01:11    <DIR>          ..
04-02-2023  01:13             1,180 index.js
               1 File(s)          1,180 bytes
               2 Dir(s)  329,958,957,056 bytes free


*/