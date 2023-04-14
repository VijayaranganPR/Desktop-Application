/*
fs.futimes is a method in Node.js that allows you to change the access and modification times of a file. The method takes the following arguments:

fd: The file descriptor for the file you want to modify the access and modification times of.
atime: The new access time for the file in seconds since the epoch (00:00:00 UTC, January 1, 1970).
mtime: The new modification time for the file in seconds since the epoch (00:00:00 UTC, January 1, 1970).
callback: A callback function that will be called once the access and modification times have been updated. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.open('file.txt', 'r+', (err, fd) => {
    if (err) throw err
    console.log('file opened')

    fs.futimes(fd, Date.now() / 1000, Date.now() / 1000, (err) => {
        if (err) throw err;
        console.log(`the access time and modification time is updated`);
    })
})
/*
file opened
the access time and modification time is updated
*/