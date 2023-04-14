/*
The zlib.createBrotliDecompress function in Node.js is used to create a new Brotli decompressor object. 
The options parameter is an optional argument that allows you to configure the behavior of the decompressor.
*/

const zlib = require('zlib')

const brotliDecompress = zlib.createBrotliDecompress()

const input = Buffer.from('Hello, World!')

const compressed = zlib.brotliCompressSync(input)
console.log(compressed.toString('hex'))     // 0b068048656c6c6f2c20576f726c642103

brotliDecompress.on('data', (chunk) => {
    console.log(chunk.toString())           // Hello, World!
})

brotliDecompress.on('end', () => {
    console.log('decompression ended')      // decompression ended
})

brotliDecompress.end(compressed)
