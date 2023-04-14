/*
"Trailers" in Node.js refer to additional HTTP headers that are sent at the end of an HTTP request or response message. 
They contain metadata information that supplements the main headers and are used to provide additional information, 
such as the length of the message body or encoding.
*/
const http = require('http');

const server = http.createServer((req, res) => {
    // also a write to get trailers.
    res.write('Hello World!');
    res.addTrailers({ 'Content-MD5': '78e731027d8fd50ed642340b7c9a63b3' });
    res.end();
});

server.listen(3000);

const client = http.get('http://localhost:3000/', (res) => {

    // we should need to add 'data' to get trailer 'end'.
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    });

    res.on('end', () => {
        console.log(res.trailers);
    });
});

setTimeout(() => {
    server.close()
}, 1000);
/* 
Hello World!
{ 'content-md5': '78e731027d8fd50ed642340b7c9a63b3' }
 */