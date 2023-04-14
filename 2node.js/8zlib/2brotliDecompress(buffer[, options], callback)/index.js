/*
The zlib.brotliDecompress function in Node.js is used to decompress a Buffer object that was compressed using the Brotli compression algorithm. 
The buffer parameter is the compressed data to be decompressed, and the options parameter is an optional argument that allows you to configure the behavior of the decompressor. 
The callback parameter is a function that will be called with the decompressed data when the decompression is complete.
*/

const zlib = require('zlib')

const input = 'Hello, World!'

const brotliCompress = zlib.brotliCompressSync(input)

console.log(brotliCompress.toString('hex'))         // 0b068048656c6c6f2c20576f726c642103

const brotliDecompress = zlib.brotliDecompress(brotliCompress, (err, decompressed) => {
    if(err) throw err
    console.log(decompressed.toString())            // Hello, World!
})
