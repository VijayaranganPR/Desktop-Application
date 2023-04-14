/*
The zlib.createGunzip function in Node.js is used to create a new Gunzip decompressor object. 
The options parameter is an optional argument that allows you to configure the behavior of the decompressor.

Gunzip is a utility used to decompress files that have been compressed using the Gzip compression format. 
The Gzip format is a popular file format for compressing data, as it provides high compression ratios while still being relatively fast to compress and decompress.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.gzipSync(input)

console.log(compressed.toString('hex'))             // 1f8b080000000000000af348cdc9c9d75108cf2fca49510400d0c34aec0d000000


const gunzip = zlib.createGunzip()

gunzip.on('data', (chunk) => {
    console.log(chunk.toString())                   // Hello, World!
})

gunzip.on('end', () => {
    console.log('uncompression ended')              // uncompression ended
})

gunzip.end(compressed)
