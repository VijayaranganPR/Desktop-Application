/*
The zlib.createUnzip function in Node.js is used to create a new stream for decompressing data that was previously compressed using the gzip format. 
The options parameter is an optional argument that allows you to configure the behavior of the decompression.

The gzip format is a widely-used format for compressing data, and it is commonly used for compressing files for distribution on the web. 
The gzip format provides good compression ratios and is fast to both compress and decompress data.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.gzipSync(input)

console.log(compressed.toString('hex'))         // 1f8b080000000000000af348cdc9c9d75108cf2fca49510400d0c34aec0d000000

const unZip = zlib.createUnzip()

unZip.on('data', (chunk) => {
    console.log(chunk.toString())               // Hello, World!
})

unZip.on('end', () => {
    console.log('uncompressed')                 // uncompressed
})

unZip.end(compressed)
