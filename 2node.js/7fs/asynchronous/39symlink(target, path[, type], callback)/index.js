/*
The fs.symlink method in Node.js is used to create a symbolic link (also known as a "symlink").

target is a string that specifies the file or directory that the symlink should point to.
path is a string that specifies the location where the symlink should be created.
type is an optional string that specifies the type of symlink to be created. It can be either 'dir' or 'file'. On Windows, it is ignored.
callback is a function that takes one argument: (err). If the operation is successful, err is null. If an error occurs, err will contain information about the error.

*/

const fs = require('fs')

fs.symlink('./file.txt', './newLink.txt', 'file',(err) => {
    if(err) throw err
    console.log('new link created for file.txt')
})

// fs.lstat('file.txt', (err, stats) => {
//     if(err) throw err
//     // console.log(stats)
// })
// console.log(fs.constants.S_IFLNK)