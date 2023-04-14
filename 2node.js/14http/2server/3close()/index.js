/*
Stops the server from accepting new connections and closes all connections connected to this server which are not sending a request or waiting for a response. 


*/
const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})


server.close((err) => {
    console.log('server Closed')
} )

/*
server Closed
*/