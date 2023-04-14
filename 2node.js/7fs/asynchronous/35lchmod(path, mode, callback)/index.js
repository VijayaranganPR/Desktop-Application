/*
fs.lchmod is a method in Node.js that allows you to change the permissions of a symbolic link (also known as a soft link or symlink). The method takes the following arguments:

path: The file path of the symbolic link you want to modify the permissions of.
mode: The new permissions for the symbolic link, represented as an octal number.
callback: A callback function that will be called once the permissions have been updated. The callback will receive an error object as its first argument if an error occurred, or null otherwise.


**** this method is only available in macOS
*/

// const fs = require('fs')

// fs.lchmod('file.txt', 0o777, (err) => {
//     if(err) throw err
//     console.log('symbolic link is changed')
// })

/*
symbolic link is changed
*/