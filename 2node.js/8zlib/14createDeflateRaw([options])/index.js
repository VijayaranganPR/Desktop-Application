/*
The zlib.createDeflateRaw function in Node.js is used to create a new DeflateRaw compressor object. 
The options parameter is an optional argument that allows you to configure the behavior of the compressor.

DeflateRaw is a variation of the Deflate compression algorithm that does not include a header or checksum. 
It is often used when a more efficient compression algorithm is needed and the overhead of the header and checksum is not acceptable.
*/

const zlib = require('zlib')

const input = Buffer.from('Hello, World!')

const deflateRaw = zlib.createDeflateRaw()

deflateRaw.on('data', (chunk) => {
    console.log(chunk.toString('hex'))          // f348cdc9c9d75108cf2fca49510400
})

deflateRaw.on('end', () => {
    console.log('compression completed')        // compression completed
})

deflateRaw.end(input)
