/*
The zlib.unzip function in Node.js is used to decompress data that was previously compressed using the gzip format. 
The buffer parameter is the buffer of compressed data to be decompressed. 
The options parameter is an optional argument that allows you to configure the behavior of the decompression. 
The callback parameter is a function that will be called when the decompression is complete, and it will be passed two arguments: an error (if one occurred) and the decompressed data.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const compressed = zlib.gzipSync(input)

console.log(compressed.toString('hex'))             // 1f8b080000000000000af348cdc9c9d75108cf2fca49510400d0c34aec0d000000

zlib.unzip(compressed, (err, uncompressed) => {
    if(err) throw err
    console.log(uncompressed.toString())            // Hello, World!
})
