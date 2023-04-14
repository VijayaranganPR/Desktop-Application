/*
In Node.js, the write() method is used to write data to an HTTP response object. 
It is used to send a chunk of data to the client as part of the response. 
The chunk argument is a string or a buffer containing the data to be written. 

The encoding argument is an optional string that specifies the encoding to be used for the chunk (defaults to 'utf8'). 
The callback argument is an optional function that is called after the data has been written.

*/

const http = require('http');


// creating server 
const server = http.createServer((req, res) => {
    res.write('Hello, World', 'utf-8', (err) => {
        if(err)console.log(err.message)
        console.log(`write executed`);
    })
    res.end('end statement')
    
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
write executed
Hello, World
end statement
*/