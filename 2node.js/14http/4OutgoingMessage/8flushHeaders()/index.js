/*
"OutgoingMessage.flushHeaders()" is a method in Node.js used to force the sending of the response headers for an HTTP response. 
By default, headers are automatically sent when the first chunk of data is written to the response, 
but this method allows the headers to be sent earlier if needed.
*/
const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.flushHeaders();
    res.write('Hello, World!')
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
Hello, World!
end statement
*/