/*
fs.truncate() is a Node.js file system API that truncates a file to a specified length.

It takes two or three arguments:

path: A string that specifies the path to the file.
len (optional): An integer that specifies the length to which the file should be truncated. If len is not specified, the file will be truncated to an empty file.
callback: A function that is called once the truncation is complete. It takes one argument, an error object, which is null if the operation was successful, or contains information about the error if an error occurred.

*/

const fs = require('fs')

fs.truncate('file.txt', 5,(err) => {
    if(err) throw err
    console.log('file truncated to lenght 5')
})