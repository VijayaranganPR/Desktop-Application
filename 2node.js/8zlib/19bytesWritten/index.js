/*
zlib.bytesWritten is a property in Node.js that returns the number of bytes written so far in a gzip stream. 
This can be useful for tracking the progress of a gzip operation. 
The property is a member of the zlib module in Node.js and can be accessed as follows:
*/

const zlib = require('zlib')

const gzip = zlib.createGzip()

gzip.write('Hello, World!', () => {
    console.log(gzip.bytesWritten)      // 13
})
