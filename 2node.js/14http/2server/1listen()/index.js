/*
server.listen() is a method available in the Node.js HTTP server object. It is used to start the HTTP server and begin listening for incoming connections on the specified port.

The server.listen() method takes two arguments: a port number and an optional callback function. The port number is the number of the network port on which the server should listen for incoming connections. The optional callback function is called when the server is ready to start accepting connections.


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

/*
server listening

*/