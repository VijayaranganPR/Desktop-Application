/*
server.headersTimeout is a property of the Node.js HTTP server object that specifies the maximum amount of time to wait for the first byte of the request header to arrive from the client before timing out the request.

By default, the headersTimeout property is set to two minutes (120000 milliseconds). If a request takes longer than this time to receive the first byte of the request header, the request will be terminated and a 408 Request Timeout error will be returned to the client.

This property can be used to enforce a timeout on incoming requests to prevent the server from being tied up waiting for slow or hung clients. It can also be used to protect the server from malicious clients that may send a slow stream of data in an attempt to cause a denial of service attack.


*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.listen(3000, () => {
    console.log("server listening")
})
// Set the headers timeout to 10 seconds
server.headersTimeout = 10000;

/*
server listening

*/