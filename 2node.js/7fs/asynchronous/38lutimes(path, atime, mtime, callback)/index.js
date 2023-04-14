/*
fs.lutimes is a method in Node.js that allows you to change the access and modification times of a symbolic link (also known as a soft link or symlink). The method takes the following arguments:

path: The file path of the symbolic link you want to modify the access and modification times of.
atime: The new access time for the symbolic link, either as a Date object or a Unix timestamp (the number of seconds since January 1, 1970, 00:00:00 UTC).
mtime: The new modification time for the symbolic link, either as a Date object or a Unix timestamp.
callback: A callback function that will be called once the access and modification times have been updated. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.lutimes('file.txt', Date.now()/1000, Date.now()/1000, (err) => {
    if(err) throw err
    console.log('access time and modification time is changed for symbolic link')
})
/*
access time and modification time is changed for symbolic link
*/