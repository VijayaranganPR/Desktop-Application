/*
The fs.readdir method in Node.js is used to read the contents of a directory.

path is a string that specifies the directory to be read.
options is an object that specifies encoding for the filenames returned in the callback.
callback is a function that takes two arguments: (err, files). If the operation is successful, err is null and files is an array of the names of the files in the directory. If an error occurs, err will contain information about the error and files will be undefined.

*/

const fs = require('fs')

fs.readdir('Directory', 'utf-8', (err, files) => {
    if(err) throw err
    files.forEach((file) => {
        fs.readFile('Directory/' +file, 'utf-8', (err, data) => {
        if(err) throw err
            console.log(data)
        })
    })
} )

/*
text in file 1
text in file 2
*/