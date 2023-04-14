/*
fs.link is a method in Node.js that creates a new link (also known as a hard link) to an existing file. The method takes the following arguments:

A hard link allows multiple file names to reference the same file on a file system, so that changes to one file are reflected in all its linked names. 
This can be useful in certain scenarios where you want multiple files to share the same data.



existingPath: The file path of the existing file you want to link to.
newPath: The file path of the new link you want to create.
callback: A callback function that will be called once the link has been created. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.link('file.txt', 'newFile.txt',(err) => {
    if(err) throw err
    console.log('new hard link created')
})

/*
new hard link created
*/
