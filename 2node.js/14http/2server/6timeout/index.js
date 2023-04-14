/*
server.timeout is a property of the Node.js HTTP server object that specifies the maximum amount of time to wait for the next incoming request before timing out the server.

The server.timeout property is used to set the maximum amount of time the server will wait for the next incoming request before timing out. If the server has no incoming requests for the specified amount of time, the server will automatically close the connection and emit a timeout event.

By default, the server timeout is set to two minutes (120000 milliseconds). The server.timeout property can be used to change the default timeout value to any desired value in milliseconds.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.timeout = 100;

console.log(server.timeout)
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