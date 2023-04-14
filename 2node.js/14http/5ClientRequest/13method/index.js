/*
In Node.js, request.method is a property of an HTTP request object that represents the HTTP method used in the request. 
It is part of the http module and can be used to access information about the incoming HTTP request. 
The request.method property is a string that represents the HTTP method used in the request, such as 'GET', 'POST', 'PUT', 'DELETE', etc.
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

console.log(request.method);      //  GET
request.end()

/*
GET
server listening
server called
Response received
*/