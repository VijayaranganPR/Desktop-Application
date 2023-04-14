/*
The fs.rmdir method in Node.js is used to remove an empty directory.

path is a string that specifies the directory to remove.
options is an optional object that can have the following property:
recursive: a boolean that specifies whether to remove the directory and its contents recursively. If set to true, fs.rmdir will remove the directory and its contents. If set to false (default), fs.rmdir will only remove the directory if it is empty.
callback is a function that takes two arguments: (err). err is an error object if an error occurred during the directory removal operation.

*/

const fs = require('fs')

fs.rmdir('emptyDirectory', (err) => {
    if(err) throw err
    console.log('directory removed')
})
/*
directory removed
*/