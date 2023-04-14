/*
fs.fchown is a method in Node.js used to change the owner and group of a file associated with a file descriptor (fd). The method takes the following arguments:

fd: The file descriptor for the file whose owner and group you want to change.
uid: The numeric user ID of the new owner of the file.
gid: The numeric group ID of the new group of the file.
callback: A callback function that will be called once the file owner and group have been changed. The callback will receive an error object as its first argument if an error occurred, or null otherwise.

*/

const fs = require('fs')

fs.open('file.txt','r',(err,fd) =>{
    if(err) throw err

    console.log('file opened successfully')

    fs.fchown(fd, 1000, 1000, (err) => {
        if(err) throw err

        console.log('File owner changed')
    })
})

/*
file opened successfully
File owner changed
*/