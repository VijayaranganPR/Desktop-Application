/*
The zlib.flush() method is used to flush the write buffers of the zlib stream. 
It is useful when you want to write the remaining data in the write buffer to the output stream before closing it.

kind is an optional parameter that can be either zlib.Z_NO_FLUSH, zlib.Z_SYNC_FLUSH, or zlib.Z_FULL_FLUSH. 
zlib.Z_NO_FLUSH is the default and flushes only the write buffer, zlib.Z_SYNC_FLUSH flushes the write buffer and returns the output data immediately, and zlib.Z_FULL_FLUSH flushes the write buffer and starts a new block.

callback is a function that will be called when the flush operation is complete. 
If there's an error during the flush, it will be passed to the callback as the first argument.
*/

const zlib = require('zlib');

const input = Buffer.from('Hello World!');

const deflate = zlib.createDeflate();

deflate.write(input);

deflate.flush(zlib.Z_SYNC_FLUSH, err => {
  if (err) {
    console.error(err);
  } else {
    let chunks = [];

    deflate.on('data', chunk => {
      chunks.push(chunk);
    });

    deflate.on('end', () => {
      const output = Buffer.concat(chunks);
      console.log(`Compressed buffer: ${output.toString('hex')}`);              // Compressed buffer: 789cf348cdc9c95708cf2fca495104001c49043e

      deflate.close(err => {
        if (err) {
          console.error(err);
        } else {
          console.log('Deflate stream closed');             // Deflate stream closed
        }
      });
    });
  }
});

deflate.end();
