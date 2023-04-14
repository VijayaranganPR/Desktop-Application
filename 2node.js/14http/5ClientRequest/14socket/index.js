/*
Reference to the underlying socket. Usually users will not want to access this property. In particular, the socket will not emit 'readable' events because of how the protocol parser attaches to the socket.

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

setTimeout(() => server.close(), 1000)

const options = {
    host: 'www.google.com',
};
const req = http.get(options);
req.end();
req.once('response', (res) => {
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;
    console.log(`Your IP address is ${ip} and your source port is ${port}.`);
    // Consume response object
});

/*
server listening
Your IP address is 2401:4900:1cc8:408a:a531:6b7c:bcf8:53e and your source port is 58595.
*/