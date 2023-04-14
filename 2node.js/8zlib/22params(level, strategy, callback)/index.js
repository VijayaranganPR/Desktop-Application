/*
The zlib.params() method is used to change the compression level and strategy of a zlib stream. 
The method is asynchronous and should be called before writing any data to the stream.

level is an integer that represents the compression level. 
It can range from zlib.Z_NO_COMPRESSION to zlib.Z_BEST_COMPRESSION. The default compression level is zlib.Z_DEFAULT_COMPRESSION.

strategy is an integer that represents the compression strategy. 
It can be one of the following constants: zlib.Z_FILTERED, zlib.Z_HUFFMAN_ONLY, or zlib.Z_RLE. The default strategy is zlib.Z_DEFAULT_STRATEGY.

callback is a function that will be called when the compression level and strategy have been set. 
If there's an error during the operation, it will be passed to the callback as the first argument.
*/

const zlib = require('zlib');

const input = Buffer.from('Hello World!');

const deflate = zlib.createDeflate();

deflate.params(zlib.Z_BEST_COMPRESSION, zlib.Z_RLE, err => {
    if (err) {
        console.error(err);
    } else {
        deflate.write(input);

        let chunks = [];

        deflate.on('data', chunk => {
            chunks.push(chunk);
        });

        deflate.on('end', () => {
            const output = Buffer.concat(chunks);
            console.log(`Compressed buffer: ${output}`);

            deflate.close(err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Deflate stream closed');
                }
            });
        });
    }
});
deflate.end(input);


/*
getting erro restudy
*/