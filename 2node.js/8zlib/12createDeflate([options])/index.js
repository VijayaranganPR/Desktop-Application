/*
The zlib.createDeflate function in Node.js is used to create a new Deflate compressor object. 
The options parameter is an optional argument that allows you to configure the behavior of the compressor.
*/

const zlib = require('zlib')

const deflate = zlib.createDeflate()

const input = Buffer.from('Hello, World!')

deflate.on('data', (chunk) => {
    console.log(chunk.toString('hex'))
    /*
    789c
    f348cdc9c9d75108cf2fca495104001f9e046a
    */
})

deflate.on('end', () => {
    console.log('compress finished')            // compress finished
})

deflate.end(input)
