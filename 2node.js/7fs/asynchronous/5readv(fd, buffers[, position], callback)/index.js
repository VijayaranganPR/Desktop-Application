/*
The fs.readv method in Node.js is used to read data from a file into an array of buffer objects.

fd is an integer that specifies the file descriptor for the file to be read.
buffers is an array of Buffer or Uint8Array objects that will be filled with data from the file.
position is an optional integer that specifies the starting position in the file from where the data should be read. If not provided, data is read from the current position.
callback is a function that takes two arguments: (err, bytesRead, buffers). err is an error object if an error occurred during the read operation. bytesRead is the number of bytes read. buffers is an array of Buffer or Uint8Array objects filled with the data read from the file.

*/

const fs = require('fs')
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(20);

fs.open('file.txt', 'r', (err, fd) => {
    if(err) throw err
    console.log(`file opened`);

    fs.readv(fd, [buf1, buf2], 0, (err, bytesRead, buffer) => {
        if(err) throw err

        console.log(bytesRead)
        console.log(buffer[0].toString())
        console.log(buffer[1].toString())
    } )
})

/*
17
some text
in here
*/