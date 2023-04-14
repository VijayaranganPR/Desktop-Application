/*
The writableObjectMode property of an HTTP response object in Node.js indicates whether the response is in object mode or not.

Syntax: response.writableObjectMode

Object mode is a mode of operation for streams in which the data is treated as a sequence of JavaScript objects, rather than a sequence of bytes.
*/

const http = require('http');
const stream = require('stream');
const server = http.createServer((req, res) => {
    const objectStream = new stream.Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
            this.push(chunk.toUpperCase());
            callback();
        }
    });
    console.log('Object mode:', objectStream.writableObjectMode);
    objectStream.pipe(res);
    objectStream.write('Hello World\n');
    objectStream.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

const client = http.request('http://localhost:3000/', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    })
})
client.end()
setTimeout(() => {
    server.close()
}, 1000)
/*
Server running at http://localhost:3000/
Object mode: true
HELLO WORLD
*/