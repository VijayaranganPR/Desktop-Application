/*
The server.closeAllConnections() method is a method available in the Node.js HTTP server object. It is used to close all active connections to the HTTP server. This method is part of the cluster module in Node.js, which provides support for creating child processes that share the same port.

By calling server.closeAllConnections(), all connections to the server will be terminated, allowing the process to shut down cleanly. This is useful when the server needs to be restarted or when you want to terminate all connections to the server for maintenance or other reasons.
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
server.closeAllConnections()

/*
server listening

*/