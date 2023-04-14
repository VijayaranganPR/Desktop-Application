/*
fs.ftruncate is a method in Node.js that allows you to truncate a file to a specified length. The method takes the following arguments:

fd: The file descriptor for the file you want to truncate.
len (optional): The length in bytes to which you want to truncate the file. If not specified, the file will be truncated to its current position.
callback: A callback function that will be called once the file has been truncated. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.open('file.txt', 'r+', (err, fd) => {
    if(err) throw err
    console.log('file opened')

    fs.ftruncate(fd, 5, (err) => {
        console.log(`file truncated for 5 bytes`);     // except first 5 extra items will be removed
    })
})
/*
file opened
file truncated for 5 bytes
*/