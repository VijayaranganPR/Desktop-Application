/*
server.closeIdleConnections() is a method available in the Node.js HTTP server object. It is used to close all idle connections to the server. This method is part of the cluster module in Node.js, which provides support for creating child processes that share the same port.

An idle connection is a connection that has not been used for a specified period of time. The idle time is determined by the server's keep-alive timeout setting, which is typically set to two minutes. By calling server.closeIdleConnections(), all connections to the server that have been idle for longer than the keep-alive timeout will be terminated.

This method is useful for freeing up system resources and for reducing the number of open connections to the server. It's also useful when the server needs to be restarted or when you want to close idle connections to the server for maintenance or other reasons.

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
server.closeIdleConnections()

/*
server listening

*/