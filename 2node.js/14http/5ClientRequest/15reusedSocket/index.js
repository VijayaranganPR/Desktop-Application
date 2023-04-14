/*
"request.reusedSocket" is a property in the Node.js HTTP module that indicates whether the socket used for a particular request has been previously used for another request.

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

var options = {
    host: 'localhost',
    port: 3000,
    path: '/appdata',
    headers: {
        contentType: 'text/plain'
    }

};

var request = http.request(options, function (res) {
    console.log('Response received');
});

console.log(request.reusedSocket);      //  false
request.end()

/*
false
server listening
server called
Response received
*/
