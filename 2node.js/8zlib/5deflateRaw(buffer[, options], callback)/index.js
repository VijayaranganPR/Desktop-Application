/*
The zlib.deflateRaw function in Node.js is used to compress a Buffer object using the DeflateRaw compression algorithm. 
The buffer parameter is the data to be compressed, and the options parameter is an optional argument that allows you to configure the behavior of the compressor.
The callback parameter is a function that will be called with the compressed data when the compression is complete.

DeflateRaw is a variation of the Deflate compression algorithm that does not include a header or checksum. 
It is often used when a more efficient compression algorithm is needed and the overhead of the header and checksum is not acceptable.
*/

const zlib = require('zlib')

const input = Buffer.from("Hello, World")

zlib.deflateRaw(input, (err, compressed) => {
    if(err) throw err
    console.log(compressed.toString('hex'))         // f348cdc9c9d75108cf2fca490100
})

