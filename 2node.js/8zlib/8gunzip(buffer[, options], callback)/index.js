/*
The zlib.gunzip function in Node.js is used to decompress data that was previously compressed using the Gzip compression format. 
The buffer parameter is the compressed data, and the options parameter is an optional argument that allows you to configure the behavior of the decompression. 
The callback parameter is a function that is called when the decompression is complete.

Gzip is a popular file format for compressing data, as it provides high compression ratios while still being relatively fast to compress and decompress. 
The Gzip format is widely used for compressing files, web content, and other data that needs to be transmitted over the internet.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.gzipSync(input)

console.log(compressed.toString('hex'))         // 1f8b080000000000000af348cdc9c9d75108cf2fca49510400d0c34aec0d000000

zlib.gunzip(compressed, (err, uncompressed) => {
    if(err) throw err
    console.log(uncompressed.toString())        // Hello, World!
})