/*
In Node.js, the hasHeader() method is used to check if a specific header exists in an HTTP response object. 
It returns a boolean indicating whether the header exists or not. 
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