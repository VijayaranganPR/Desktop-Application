/*
The writableEnded property of an HTTP response object in Node.js indicates whether the response has ended or not.

Syntax: response.writableEnded

A response is considered ended when all data has been written to it and the underlying resources, such as sockets and file descriptors, have been closed.


*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(res.writableEnded)         // false
    res.write('Hello, World!')
    console.log(res.writableEnded)         // false
    res.end()
    console.log(res.writableEnded)         // true

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
false
false
true
Hello, World!
*/