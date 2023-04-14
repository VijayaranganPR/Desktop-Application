/*
Sets the timeout value in milliseconds for receiving the entire request from the client.

If the timeout expires, the server responds with status 408 without forwarding the request to the request listener and then closes the connection.

It must be set to a non-zero value (e.g. 120 seconds) to protect against potential Denial-of-Service attacks in case the server is deployed without a reverse proxy in front.

*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})


server.setTimeout(1000, (socket) => {
    console.log('Server timeout')
    console.log(server.requestTimeout)      // 300000
    socket.end()
})
server.listen(3000, () => {
    console.log("server listening")
})


const request = http.request('http://localhost:3000/',(res) => {
    console.log('response received')
})
request.end()

/*
server listening
server called
response received
server called       // after reload
server called
Server timeout
300000
Server timeout
300000
*/