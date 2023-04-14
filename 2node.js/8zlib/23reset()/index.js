/*
The reset() method of the zlib module resets the compressor/decompressor to its initial state, discarding any previously processed data. 
This allows you to reuse the same instance of the compressor/decompressor to process multiple streams of data without creating a new instance for each stream.
*/

const zlib = require('zlib');

const input1 = Buffer.from('Hello World 1!');
const input2 = Buffer.from('Hello World 2!');

const deflate = zlib.createDeflate();

let chunks = [];

deflate.on('data', chunk => {
  chunks.push(chunk);
});

deflate.on('end', () => {
  const output = Buffer.concat(chunks);
  console.log(`Compressed buffer: ${output}`);
  chunks = [];
});

deflate.write(input1);
deflate.end();

deflate.reset();

deflate.write(input2);
deflate.end();
