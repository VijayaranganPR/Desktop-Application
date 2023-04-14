/*
The fs.readlink method in Node.js is used to read the value of a symbolic link (also known as a "symlink").

path is a string that specifies the symlink to be read.
options is an object that specifies encoding for the value returned in the callback.
callback is a function that takes two arguments: (err, linkString). If the operation is successful, err is null and linkString is a string that represents the value of the symlink. If an error occurs, err will contain information about the error and linkString will be undefined.

*/

const fs = require('fs')

fs.link('file.txt', 'newLink.txt',(err) => {
    if(err) throw err
    console.log('new link created')
    fs.readlink('newLink.txt','utf-8',(err, linkString) => {
        if(err) throw err
        console.log(linkString)
    })
})