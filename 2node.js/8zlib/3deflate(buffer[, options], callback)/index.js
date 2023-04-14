/*
The zlib.deflate function in Node.js is used to compress a Buffer object using the Deflate compression algorithm. The buffer parameter is the data to be compressed, and the options parameter is an optional argument that allows you to configure the behavior of the compressor. 
The callback parameter is a function that will be called with the compressed data when the compression is complete.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

zlib.deflate(input, (err, compressed) => {
    if(err) throw err
    console.log(compressed.toString('hex'))             // 789cf348cdc9c9d75108cf2fca495104001f9e046a
})