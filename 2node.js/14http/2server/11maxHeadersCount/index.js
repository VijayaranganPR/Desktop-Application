/*
server.maxHeadersCount is a property of the Node.js HTTP server object that specifies the maximum number of headers that will be allowed in an incoming HTTP request.

By default, the maxHeadersCount property is set to 2000. If an incoming request includes more than this number of headers, the request will be terminated and a 400 Bad Request error will be returned to the client.

This property can be used to limit the size of incoming requests to prevent the server from being overwhelmed by large requests that may consume too much memory or processing power. 
It can also be used to protect the server from malicious clients that may send an excessive number of headers in an attempt to cause a denial of service attack.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.maxHeadersCount = 100;

console.log(server.maxHeadersCount)
server.listen(3000, () => {
    console.log("server listening")
})

setTimeout(() => {
    server.close()
}, 1000);

const request = http.request('http://localhost:3000/',(res) => {
    console.log('response received')
})
request.end()

/*
100
server listening
server called
response received
*/