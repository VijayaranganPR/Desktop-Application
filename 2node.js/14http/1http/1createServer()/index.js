/*
http.createServer() is a method in Node.js that creates an HTTP server. 
It takes one argument, a callback function that is executed each time the server receives a request. 

The callback function takes two arguments: 
a request object, which contains information about the incoming request, and 
a response object, which is used to send a response back to the client. 

Here's an example of how to use http.createServer() to create a simple server that listens on port 8000 and sends "Hello World" as the response:
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello world')
})

server.listen(8000, () => {
    console.log('Server listenting on port 8000')
})
/*
1)http://localhost:8000/
Hello World!
*/