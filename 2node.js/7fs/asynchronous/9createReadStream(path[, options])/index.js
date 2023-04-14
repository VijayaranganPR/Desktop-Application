/*
fs.createReadStream is a method in Node.js that is used to create a readable stream for a file at the specified path. 

The options argument is an optional object that may contain properties such as encoding and start/end that define the encoding of the data in the stream and the range of bytes to be read, respectively.

The difference between fs.readFile and fs.createReadStream in Node.js is that fs.readFile reads the entire contents of a file into memory at once,
whereas fs.createReadStream reads the contents of a file incrementally, in small chunks.

*/

const fs = require('fs')

const stream = fs.createReadStream('file.txt',{encoding: 'utf-8'})

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('content end')
})

stream.on('error', (err) => {
    throw err
})

/*
some text in here.
content end
*/

