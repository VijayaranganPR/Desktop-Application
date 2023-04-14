/*
fs.close() is a method in Node.js that is used to close an open file. 
The fd argument is the file descriptor of the open file. 
The callback function is called after the file has been closed and is passed an error argument if an error occurs.
*/

const fs = require('fs')

fs.open('file.txt', 'r', (err, fd)  => {
    if(err) throw err

    console.log('file opened successfully')

    fs.close(fd, (err) => {
        if(err) throw err

        console.log('file closed successfully')
    })
})
/*
file opened successfully
file closed successfully
*/