/*
fs.writev() is a Node.js file system API that writes an array of buffers to an open file.

It takes three to four arguments:

fd: A file descriptor that references the file to be written to. This is the value returned by a successful call to fs.open().
buffers: An array of buffers that contain the data to be written to the file.
position (optional): An integer that specifies the position in the file at which to begin writing. If not specified, data is written at the current position.
callback: A function that is called once the write operation is complete. It takes three arguments: (err, written, buffers), where err is an error object (or null if the operation was successful), written is the number of bytes written to the file, and buffers is the array of buffers that was written.

*/

const fs = require('fs')
const buffers = [Buffer.from("Hello"), Buffer.from(" world!")];

fs.open('file.txt', 'w', (err, fd) => {
    if(err) throw err
    console.log('file opened')

    fs.writev(fd, buffers, null, (err, written, buffers) => {
        if(err) throw err

        console.log(written)
        console.log(buffers.toLocaleString())
    })
})
