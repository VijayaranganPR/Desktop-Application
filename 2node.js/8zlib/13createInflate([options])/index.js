/*
The zlib.createInflate function in Node.js is used to create a new stream for decompressing data that was previously compressed using the Deflate compression format. 
The options parameter is an optional argument that allows you to configure the behavior of the decompression.

The Deflate compression format is a popular format for compressing data, as it provides high compression ratios while still being relatively fast to compress and decompress. 
The Deflate format is widely used for compressing files, web content, and other data that needs to be transmitted over the internet.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.deflateSync(input)

const inflate = zlib.createInflate()

inflate.on('data', (chunk) => {
    console.log(chunk.toString('hex'))              // 48656c6c6f2c20576f726c6421
})

inflate.on('end', () => {
    console.log('decompression ended')              // decompression ended
})

inflate.end(compressed)
