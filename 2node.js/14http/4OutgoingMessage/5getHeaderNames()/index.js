/*
In Node.js, the getHeaderNames() method is used to retrieve the names of the headers of an HTTP response object. 
It returns an array of strings, where each string represents the name of a header.
*/

const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    console.log(res.getHeaderNames());
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
[ 'content-type' ]
*/