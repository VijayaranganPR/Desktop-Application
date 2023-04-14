/*
The method setHeader is used in Node.js to set a header for an HTTP response object.
*/

const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    console.log(res.getHeader('Content-Type'));
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
text/plain
end statement
*/