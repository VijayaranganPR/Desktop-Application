/*
fs.fchmod is a method in Node.js used to change the file mode (permissions) of a file associated with a file descriptor (fd). The method takes the following arguments:

fd: The file descriptor for the file whose mode you want to change.
mode: The new mode (permissions) for the file, specified as an octal number.
callback: A callback function that will be called once the file mode has been changed. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/
const fs = require('fs')

fs.open('file.txt',(err,fd) => {
    if(err) throw err
    console.log('file opened')

    fs.fchmod(fd, 0o777, (err) => {
        if(err) throw err
        console.log('file mode changed')
    })
})

/*
file opened
file mode changed
*/

/*
The difference between fs.fchmod and fs.chmod in Node.js is the way in which they identify the file whose mode you want to change.

fs.chmod takes the file path as an argument and changes the mode (permissions) of the file at that path:
In contrast, fs.fchmod takes a file descriptor as an argument and changes the mode (permissions) of the file associated with that descriptor:
*/