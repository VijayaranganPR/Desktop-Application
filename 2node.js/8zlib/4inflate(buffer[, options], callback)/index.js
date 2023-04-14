/*
The zlib.createInflate function in Node.js is used to create a new stream for decompressing data that was previously compressed using the Deflate compression format. 
The options parameter is an optional argument that allows you to configure the behavior of the decompression.

The Deflate compression format is a popular format for compressing data, as it provides high compression ratios while still being relatively fast to compress and decompress. 
The Deflate format is widely used for compressing files, web content, and other data that needs to be transmitted over the internet.


*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.deflateSync(input)

console.log(compressed.toString('hex'))                     // 789cf348cdc9c9d75108cf2fca495104001f9e046a

zlib.inflate(compressed, (err, uncompressed) => {
    if(err) throw err
    console.log(uncompressed.toString())                    // Hello, World!
})
