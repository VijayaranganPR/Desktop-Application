/*
fs.open is a method in Node.js that opens a file.

It takes the following arguments:

path: the path to the file you want to open
flags: an optional string that specifies the mode in which to open the file. Possible values include 'r' (read-only), 'r+' (read/write), 'w' (write-only), 'w+' (write/read), 'a' (append-only), and 'a+' (append/read).
mode: an optional number that specifies the permissions to use if creating a new file. This argument is only relevant when the file does not already exist.
callback: a function to be called when the file has been opened. The function takes two arguments: an error object, and the file descriptor for the opened file.
The fs.open method returns a file descriptor, which is a small integer that represents the opened file. You can use the file descriptor to perform other file system operations, such as reading or writing to the file. When you're done with the file, you should close it using fs.close.
*/
let fs = require('fs')

fs.open('newTextFile','w', (err,fd) =>{
    if(err) throw err;
    console.log('file opened')

    fs.close(fd,(err) => {
        if(err) throw err;
        console.log('file closed')
    })
})

/*
file opened
file closed
*/
