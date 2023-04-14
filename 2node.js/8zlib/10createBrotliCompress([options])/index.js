/*
The zlib.createBrotliCompress function in Node.js is used to create a new Brotli compressor object. 
The options parameter is an optional argument that allows you to configure the behavior of the compressor.

*/
const zlib = require('zlib')

const brotliCompress = zlib.createBrotliCompress();

const input = Buffer.from('Hello, World!')

brotliCompress.on('data', (chunk) => {
    console.log(chunk.toString('hex'));
})

brotliCompress.on('end', () => {
    console.log('Compression finished.');
})

brotliCompress.end(input)
/*
0b068048656c6c6f2c20576f726c642103
Compression finished.
*/