/*
"addTrailers" in Node.js is a method of the http.ServerResponse class that allows you to add HTTP trailer headers to an HTTP response message. 
Trailers are additional headers that can be sent after the main headers and the message body. They are used to provide additional information, 
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