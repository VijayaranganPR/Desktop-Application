/*
The writableHighWaterMark property of an HTTP response object in Node.js indicates the maximum number of bytes that can be buffered for a writable stream.

Syntax: response.writableHighWaterMark

When a writable stream is created, its high water mark is set to the default value of 16384 bytes. This value determines the maximum amount of data that can be buffered before the stream's write method returns false.

*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(res.writableHighWaterMark)         // 16384
    res.write('Hello, World!')
    console.log(res.writableHighWaterMark)         // 16384
    res.end()
    console.log(res.writableHighWaterMark)         // 16384

});

server.listen(3000);


// creating request
const client = http.request('http://localhost:3000/', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    })
});
client.end();



// closing server after work
setTimeout(() => {
    server.close()
}, 2000);



/*
16384
16384
16384
Hello, World!
*/