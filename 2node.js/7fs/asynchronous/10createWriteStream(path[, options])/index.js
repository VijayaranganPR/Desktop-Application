/*
fs.createWriteStream is a method in the fs (file system) module of Node.js that creates a writable stream for a file. A writable stream is an object that allows data to be written to it, and it can be used to write data to a file in a non-blocking, efficient manner.

The fs.createWriteStream method creates a writable stream for a file specified by path. The stream can then be used to write data to the file. 
*/

const fs = require('fs')
const stream = fs.createWriteStream('file.txt')

stream.write('First text\n')
stream.write('second text\n')
stream.write('third text\n')
stream.write('fourth text\n')
stream.write('fifth text\n')

stream.end()

stream.on('close', () => {
    console.log('write stream closed after completion')
})

/*
write stream closed after completion
*/