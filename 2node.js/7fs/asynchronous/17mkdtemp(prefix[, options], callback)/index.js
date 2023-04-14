/*
fs.mkdtemp is a method in Node.js that creates a new directory with a unique name. The method takes the following arguments:

prefix: A string that will be used as the prefix for the new directory's name.
options (optional): An object that can contain the following properties:
encoding: The encoding used for the returned directory name. The default value is 'utf8'.
callback: A callback function that will be called once the directory has been created. The callback will receive two arguments:
err: An error object if an error occurred, or null otherwise.
dir: The name of the newly created directory.

*/


const fs = require('fs')

fs.mkdtemp('filedir_', (err, dir) => {
    if(err) throw err
    console.log(dir);
})
/*
filedir_JEjcIG
*/