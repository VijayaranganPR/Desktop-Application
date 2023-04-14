/*
fs.chown() is a method in Node.js that is used to change the owner and group of a file or directory at the specified path. 

The uid argument is the user id of the new owner and the gid argument is the group id of the new group. 
The callback function is called after the ownership has been changed and is passed an error argument if an error occurs.
*/

const fs = require('fs')

fs.chown('file.txt', 1000, 1000, (err) => {
    if(err) throw err
    console.log('File owner changed')
})

/*
File owner changed
*/