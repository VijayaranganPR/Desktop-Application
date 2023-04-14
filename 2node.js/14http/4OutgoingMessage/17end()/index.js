/*
Finishes the outgoing message. 

If any parts of the body are unsent, it will flush them to the underlying system. 
If the message is chunked, it will send the terminating chunk 0\r\n\r\n, and send the trailers (if any).

If chunk is specified, it is equivalent to calling outgoingMessage.write(chunk, encoding), followed by outgoingMessage.end(callback).

If callback is provided, it will be called when the message is finished (equivalent to a listener of the 'finish' event).
*/
const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.write('Hello')
    res.write(', World!')
    res.end('end statement',() => {
        console.log(`response ended`);
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
response ended
Hello
, World!
end statement
*/