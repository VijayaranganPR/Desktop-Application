/*
The zlib.createGzip function in Node.js is used to create a new Gzip compressor object. 
The options parameter is an optional argument that allows you to configure the behavior of the compressor.

Gzip is a popular file format for compressing data, as it provides high compression ratios while still being relatively fast to compress and decompress. 
The Gzip format is widely used for compressing files, web content, and other data that needs to be transmitted over the internet.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const gunZip = zlib.createGzip()

gunZip.on('data', (chunk) => {
    console.log(chunk.toString('hex'))
    /*
    1f8b080000000000000a
    f348cdc9c9d75108cf2fca49510400d0c34aec0d000000
    */
})

gunZip.on('end', () => {
    console.log('compression finished')             // compression finished
})

gunZip.end(input)
