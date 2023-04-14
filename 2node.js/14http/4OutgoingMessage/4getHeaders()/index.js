/*
In Node.js, the getHeaders() method is used to retrieve the headers of an HTTP response object. 
It returns an object with key-value pairs representing the headers and their values.

*/

const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    console.log(res.getHeaders());
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
[Object: null prototype] { 'content-type': 'text/plain' }
*/