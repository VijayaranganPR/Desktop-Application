/*
fs.utimes() is a Node.js file system API that updates the access and modification times of a file.

It takes four arguments:

path: A string that specifies the path to the file.
atime: A Date object or a string representing the new access time for the file.
mtime: A Date object or a string representing the new modification time for the file.
callback: A function that is called once the time update is complete. It takes one argument, an error object, which is null if the operation was successful, or contains information about the error if an error occurred.

*/

const fs = require('fs')

fs.utimes('file.txt', Date.now()/1000, Date.now()/1000, (err) => {
    if(err) throw err
    console.log('access and modication time is changed')
})

/*
access and modication time is changed
*/