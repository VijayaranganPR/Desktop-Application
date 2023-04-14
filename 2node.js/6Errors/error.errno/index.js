/*
The error.errno property is a standard property of the Error object in Node.js, and it provides information about the error number associated with a system error.

In Node.js, a system error can occur when a low-level system call fails, for example, when trying to access a file that does not exist, or when trying to bind a socket to a port that is already in use. 
When a system error occurs, the errno property of the error provides a number that corresponds to the specific system error that occurred. 
This number can be used to diagnose the root cause of the error and provide more information about the error to the user.
*/

const fs = require('fs');

fs.readFile('nonexistent-file.txt', (error, data) => {
    if (error) {
        console.error(`Error reading file: ${error.message}`);
        console.error(`Error number: ${error.errno}`);
    } else {
        console.log(data.toString());
    }
});
/*
Error reading file: ENOENT: no such file or directory, open 'C:\Users\prvij\Desktop\Java Script\21node.js\Errors\error.errno\nonexistent-file.txt'
Error number: -4058
*/
