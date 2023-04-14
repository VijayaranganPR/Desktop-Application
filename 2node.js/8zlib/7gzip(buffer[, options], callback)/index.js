/*
The zlib.gzip function in Node.js is used to compress a buffer of data using the Gzip compression format. 
The buffer parameter is the data that you want to compress, and the options parameter is an optional argument that allows you to configure the behavior of the compression. 
The callback parameter is a function that is called when the compression is complete.

Gzip is a popular file format for compressing data, as it provides high compression ratios while still being relatively fast to compress and decompress. 
The Gzip format is widely used for compressing files, web content, and other data that needs to be transmitted over the internet.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

zlib.gzip(input, (err, compressed) => {
    if(err) throw err
    console.log(compressed.toString('hex'))     // 1f8b080000000000000af348cdc9c9d75108cf2fca49510400d0c34aec0d000000
})
