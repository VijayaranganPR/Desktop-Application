/*
<boolean> Indicates whether or not the server is listening for connections.

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
console.log(server.listening)       // true

setTimeout(() => {
    server.close()
    console.log(server.listening);      // false
}, 1000);
/*
true
server listening
false
*/