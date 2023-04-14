/*
The request.setTimeout() method in Node.js is a part of the request module, which is used to make HTTP requests. The setTimeout() method sets a timeout for the HTTP request. It takes two arguments:

timeout: an integer representing the time in milliseconds after which the request should time out.

callback: an optional callback function that will be executed if the timeout is reached before the request is completed.

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

var request = http.get(options, function (res) {
    console.log('Response received');
});

request.setTimeout(10, function () {
    console.log('Request timed out');
    request.destroy();
});

request.on('error', function (err) {
    console.log('Request error: ' + err.message);
});

request.end()

/*
server listening
server called
Request timed out
Request error: socket hang up
*/