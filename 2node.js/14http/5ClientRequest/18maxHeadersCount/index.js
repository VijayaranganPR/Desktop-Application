/*
request.maxHeadersCount is a property in the request module in Node.js, which is used to make HTTP requests. 
It specifies the maximum number of headers that will be parsed when making an HTTP request. 
If the number of headers exceeds this value, an error will be thrown. The default value for request.maxHeadersCount is 2000.
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
    path: '/',
    headers: {
        contentType: 'text/plain'
    }

};

var request = http.request(options, function (res) {
    console.log('Response received');
});

request.maxHeadersCount =100;

request.end()

/*
server listening
server called
Response received
*/