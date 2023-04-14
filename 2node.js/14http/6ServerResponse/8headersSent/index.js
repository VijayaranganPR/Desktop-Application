/*
The headersSent property of an HTTP response object in Node.js returns a boolean indicating whether the response headers have been sent to the client.

Syntax: response.headersSent

*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    console.log(res.headersSent)    // false
    res.write('Hello, World!')
    console.log(res.headersSent)    // true
    try{
        res.setHeader('Content-Type', 'text/plain')     // Cannot set headers after they are sent to the client
    }
    catch(e){
        console.log(e.message)
    }
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
false
true
Cannot set headers after they are sent to the client
Hello, World!
*/