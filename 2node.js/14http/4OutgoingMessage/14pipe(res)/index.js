/*
In Node.js, the pipe() method is used to redirect the data of a readable stream to a writable stream. 
The pipe() method is typically used with streams that implement the Node.js Stream interface, such as HTTP request and response objects.
*/

const http = require('http');
const fs = require('fs')

// creating server 
const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream('file.txt')
    readStream.pipe(res)
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
}, 20000);



/* 
write executed
Hello, World
end statement
*/
