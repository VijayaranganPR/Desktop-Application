/*
The writableCorked property of an HTTP response object in Node.js indicates whether the write queue is corked or not.

Syntax: response.writableCorked

A corked stream is a stream whose writes are temporarily buffered, rather than being written immediately to the underlying resource.

*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(res.writableCorked)         // 0
    res.write('Hello, World!')
    console.log(res.writableCorked)         // 1
    res.write('Hello, World2!')
    console.log(res.writableCorked)         // 1
    res.end()
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
0
1
1
Hello, World!
Hello, World2!
*/