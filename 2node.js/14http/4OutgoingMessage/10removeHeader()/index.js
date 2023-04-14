/*
In Node.js, the removeHeader() method is used to remove a header from an HTTP response object. 
It removes the specified header field from the response object. 
*/

const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.removeHeader('Content-Type');
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
false
*/