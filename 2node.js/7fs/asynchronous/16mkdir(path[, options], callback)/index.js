/*
fs.mkdir is a method in Node.js that creates a new directory. The method takes the following arguments:

path: The file path of the new directory you want to create.
options (optional): An object that can contain the following properties:
    mode: The file mode for the new directory. The default value is 0o777.
    recursive: A boolean value that indicates whether to create the parent directories if they do not exist. The default value is false.
callback: A callback function that will be called once the directory has been created. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.mkdir('New Directory',{recursive: true}, (err) => {
    if(err) throw err
    console.log('Directory created')
})
/*
Directory created
*/
