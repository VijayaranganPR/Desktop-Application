/*
"TrailersDistinct" in Node.js is a property that returns an array of distinct header fields in the trailers of an HTTP response. 
The trailers property provides access to the HTTP trailer headers and is used to get or set values for these headers after the main message headers have already been sent. 
The trailersDistinct property returns only the unique header fields in the trailers, without duplicates. 
This can be useful for working with the trailers in a programmatic way.
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
        console.log(res.rawTrailers);
    });
});

setTimeout(() => {
    server.close()
}, 1000);

/*
Hello World!
{ 'content-md5': [ '78e731027d8fd50ed642340b7c9a63b3' ] }
*/
