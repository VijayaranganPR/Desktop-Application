/*
The zlib.close function in Node.js is used to close a zlib stream. 
When you are finished using a zlib stream, you should call zlib.close to release any resources that the stream may be using.

The callback parameter is an optional argument that is a function that will be called when the stream has been closed. 
The function will be passed one argument: an error (if one occurred).
*/

const zlib = require('zlib');
const fs = require('fs');

const deflate = zlib.createDeflate();
const input = fs.createReadStream('input_file.txt');
const output = fs.createWriteStream('compressed_file.txt');

input.pipe(deflate).pipe(output);

deflate.on('end', () => {
  deflate.close((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Stream closed.');
    }
  });
});
