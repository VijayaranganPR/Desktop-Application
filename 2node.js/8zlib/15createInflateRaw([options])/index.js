/*
The zlib.createInflateRaw function in Node.js is used to create a new stream for decompressing raw data that was previously compressed using the DeflateRaw compression format. 
The options parameter is an optional argument that allows you to configure the behavior of the decompression.

The DeflateRaw compression format is a popular format for compressing raw data, as it provides high compression ratios while still being relatively fast to compress and decompress. 
The DeflateRaw format is used when a compressed data stream needs to be represented without the overhead of additional header and trailer information.*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.deflateRawSync(input)

console.log(compressed.toString('hex'))         // f348cdc9c9d75108cf2fca49510400

const inflateRaw = zlib.createInflateRaw()

inflateRaw.on('data', (chunk) => {
    console.log(chunk.toString())               // Hello, World
})

inflateRaw.on('end', () => {
    console.log('uncompression ended')          // uncompression ended
})

inflateRaw.end(compressed)