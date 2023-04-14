/*
"OutgoingMessage.destroy([error])" is a method in Node.js that can be used to destroy an HTTP response stream. 
This method will close the underlying connection and prevent any further data from being written to the response. 
An optional error argument can be passed to the method to indicate that the stream was destroyed due to an error.
*/
const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.write('Hello, World!')
    res.destroy();
    res.write('Hello, World 2!')
    res.end()
});

server.listen(3000);



// creating request
const client = http.request('http://localhost:3000/', (res) => {
    res.on('data',(chunk) => {
        console.log(chunk.toString())
    })

});
client.on('error', (err) => {
    console.log(err.message)
})
client.end();



// closing server after work
setTimeout(() => {
    server.close()
}, 3000);



/* 
socket hang up
*/