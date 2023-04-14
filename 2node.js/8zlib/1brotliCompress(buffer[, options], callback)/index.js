/*
The zlib.brotliCompress function in Node.js is used to compress a Buffer object using the Brotli compression algorithm. 
The buffer parameter is the input data to be compressed, and the options parameter is an optional argument that allows you to configure the behavior of the compressor. 
The callback parameter is a function that will be called with the compressed data when the compression is complete.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

zlib.brotliCompress(input, (err, compressed) => {
    if(err) throw err

    console.log(compressed.toString('hex'))
})

/*
0b068048656c6c6f2c20576f726c642103
*/