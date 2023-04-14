/*
In Node.js, the setHeader() method is used to set a header in an HTTP response object. 
It sets the value of a header field in the response object, or adds a new header field if it doesn't already exist.
*/

const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    console.log(res.hasHeader('Content-Type'));
    res.end('end statement')
    
});

server.listen(3000);


// creating request
const client = http.request('http://localhost:3000/', (res) => {
    res.on('data',(chunk) => {
        console.log(chunk.toString())
    })
});
client.end();



// closing server after work
setTimeout(() => {
    server.close()
}, 2000);



/* 
true
*/