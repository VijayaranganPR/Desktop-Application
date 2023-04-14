/*
request.getHeader(name) is a method in the Node.js http module that allows you to retrieve the value of a specific header in an incoming HTTP request. 
The name parameter is the name of the header you want to retrieve, as a string.

*/
const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.listen(3000,()=>{
    console.log("server listening")
})

setTimeout(() => server.close(), 1000)

var options = {
  host: 'localhost',
  port: 3000,
  path: '/',
};

var request = http.get(options, function(res) {
  console.log('Response received');
});

console.log(request.getHeaders())
request.on('error', function(err) {
    console.log('Request error: ' + err.message);
});

request.end()

/*
[Object: null prototype] { host: 'localhost:3000' }
server listening
server called
Response received
*/
