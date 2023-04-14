/*
Is true if all data has been flushed to the underlying system, immediately before the 'finish' event is emitted.

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
    console.log(request.writableFinished);      // true
});

console.log(request.writableFinished);      //  false
request.end()
console.log(request.writableFinished);      //  true

/*
false
false
server listening
server called
Response received
true
*/
