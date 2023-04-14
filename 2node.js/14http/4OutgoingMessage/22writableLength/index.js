/*
The writableLength property of an HTTP response object in Node.js indicates the number of bytes of data that have been queued for writing to the client.

Syntax: response.writableLength

This property is updated automatically as data is written to the response, and it represents the total number of bytes that are waiting to be written to the underlying socket.
*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(res.writableLength)         // 0
    res.write('Hello, World!')
    console.log(res.writableLength)         // 121
    res.end()
    console.log(res.writableLength)         // 0

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
121
0
Hello, World!
*/