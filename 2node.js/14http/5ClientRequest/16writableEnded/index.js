/*
Is true after request.end() has been called. This property does not indicate whether the data has been flushed, for this use request.writableFinished instead.

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

console.log(request.writableEnded);      //  false
request.end()
console.log(request.writableEnded);      //  true

/*
false
true
server listening
server called
Response received
*/
