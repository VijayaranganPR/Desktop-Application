/*
The outgoingMessage.appendHeader(name, value) method in Node.js is a method of the http.OutgoingMessage class. 
It is used to append a value to an existing HTTP header in an HTTP request or response message.
*/
const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.write('Hello, World!')
    res.end();
});

server.listen(3000);


// creating request
const client = http.request('http://localhost:3000/', (res) => {
    console.log(`Received response with status code: ${res.statusCode}`);
});
// appending new header
client.appendHeader('User-Agent', 'My-App')
client.end();



// closing server after work
setTimeout(() => {
    server.close()
}, 1000);
/* 
Hello World!
{ 'content-md5': '78e731027d8fd50ed642340b7c9a63b3' }
 */