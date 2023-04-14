/*
"fs.read" is a method in the Node.js file system (fs) module that reads data from an open file. It is similar to "fs.readFile", 
but it provides a way to read a specified number of bytes from a file, rather than reading the entire contents of the file.



It takes the following arguments:

fd: a file descriptor, obtained from fs.open, that represents the file you want to read from
buffer: a Buffer object that the data will be read into
offset: an integer that specifies the offset within the buffer at which to start writing the data
length: an integer that specifies the number of bytes to read
position: an integer that specifies the position within the file from which data should be read
callback: a function to be called after the data has been read. The function takes three arguments: an error object, the number of bytes read, and the data that was read.
The fs.read method reads data from the file represented by the file descriptor fd into the buffer object, starting at the specified position and reading length bytes. 
The offset argument specifies the starting position within the buffer object at which to start writing the data.
*/

const fs = require('fs')
const buffer = Buffer.alloc(100);

fs.open('file.txt', 'r', (err, fd) => {
    if (err) throw err
    console.log(`file opened`);

    fs.read(fd, buffer, 0, 100, 0, (err, bytesRead, data) => {
        console.log(bytesRead)
        console.log(data.toString())
    })

    fs.close(fd, (err) => {
        if (err) throw err;
    });
})

setTimeout(() => {
    console.log(buffer.toString())
}, 1000);
/*
file opened
17
some text in here
some text in here
*/