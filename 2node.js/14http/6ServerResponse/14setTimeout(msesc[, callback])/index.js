/*
outgoingMessage.setTimeout(msesc[, callback])

msesc <number>
callback <Function> Optional function to be called when a timeout occurs. Same as binding to the timeout event.

Returns: <this>

Once a socket is associated with the message and is connected, socket.setTimeout() will be called with msecs as the first parameter.
*/

const http = require('http');

// creating server 
const server = http.createServer((req, res) => {
    res.setTimeout(1000, () => {
        res.write('Hello, World!')
        console.log('request will be send after one sec')
        res.end()
    })
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
request will be send after one sec
Hello, World!
*/
