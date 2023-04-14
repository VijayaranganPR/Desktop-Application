/*
fs.fsync is a method in Node.js used to force the completion of all previously queued disk writes associated with a file descriptor (fd). The method takes the following arguments:

fd: The file descriptor for the file whose disk writes you want to force.
callback: A callback function that will be called once the disk writes have been forced. The callback will receive an error object as its first argument if an error occurred, or null otherwise.
*/

const fs = require('fs')

fs.open('file.txt','r+', (err, fd) => {
    if(err) throw err

    console.log('file opened')

    fs.write(fd, 'Hello World', 0, 'utf-8', (err) => {
        if(err) throw err

        console.log('file written started')

        fs.fsync(fd, (err) => {
            if(err) throw err
    
            console.log('file data and meta data forced')
        })
    })
})

/*
file opened
file written started
file data and meta deta forced
*/
