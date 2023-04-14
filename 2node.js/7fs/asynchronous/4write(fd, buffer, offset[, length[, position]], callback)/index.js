/*
fs.write() is a Node.js file system API that writes data to an open file.

It takes three to six arguments:

fd: A file descriptor that references the file to be written to. This is the value returned by a successful call to fs.open().
buffer: A buffer that contains the data to be written to the file.
offset: An integer that specifies the zero-based offset in the buffer at which to start writing data.
length (optional): An integer that specifies the number of bytes to be written from the buffer. If not specified, Buffer.length - offset is used.
position (optional): An integer that specifies the position in the file at which to begin writing. If not specified, data is written at the current position.
callback: A function that is called once the write operation is complete. It takes three arguments: (err, written, buffer), where err is an error object (or null if the operation was successful), written is the number of bytes written to the file, and buffer is the buffer that was written.
*/

const fs = require('fs')

const buffer = Buffer.from('Hello, World!')

fs.open('file.txt', 'w', (err,fd) => {
    if(err) throw err
    console.log(`file opened`);

    fs.write(fd, buffer, 0, buffer.length, null, (err, written, buffer) => {
        if(err) throw err

        console.log(written)
        console.log(buffer.toString())

    })
})
/*
file opened
13
Hello, World!
*/