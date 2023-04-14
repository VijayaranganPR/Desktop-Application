/*
In Node.js, you can access the protocol (either "http" or "https") used by a request by looking at the req.protocol property of the http or https request object. :

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

console.log(request.protocol);      //  http:
request.end()

/*
http:
server listening
server called
Response received
*/
