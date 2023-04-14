/*
The error.syscall property is a property of the Error object in Node.js that provides information about the system call that generated the error.

For example, you might use the error.syscall property in a Node.js application to determine the specific system call that failed when dealing with an error related to file system operations:
*/

const fs = require('fs');

fs.unlink('some/nonexistent/file', (err) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        console.error(`Syscall: ${err.syscall}`);
    }
});
/*
Error: ENOENT: no such file or directory, unlink 'C:\Users\prvij\Desktop\Java Script\21node.js\Errors\error.syscall\some\nonexistent\file'
Syscall: unlink
*/