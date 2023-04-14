/*
"OutgoingMessage.cork()" is a method in Node.js used to temporarily stop the flow of data for an HTTP response stream. 
When "cork()" is called, any data written to the response will be buffered and not sent until "uncork()" is called.
*/
const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.cork();
    res.write('Hello, World!')
    setTimeout(() => {
        res.uncork()
        res.end();      // check for timing and response in network in dev
    }, 3000);
    
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
}, 10000);
/* 
// after 3 sec 
Hello World!
*/