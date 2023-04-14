/*
The writableFinished property of an HTTP response object in Node.js indicates whether the response has finished or not.

Syntax: response.writableFinished

A response is considered finished when all data has been flushed to the client, and any underlying resources, such as sockets and file descriptors, have been closed.

*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(res.writableFinished)         // false
    res.write('Hello, World!')
    console.log(res.writableFinished)         // false
    res.end()
    console.log(res.writableFinished)         // true

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