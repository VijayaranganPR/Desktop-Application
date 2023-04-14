/*
The request.getHeaderNames() method is used to retrieve an array of all the header names present in an HTTP request in Node.js. 
This method is commonly used with the request object, which represents an incoming HTTP request.

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
console.log(request.getHeaderNames())
request.end()

/*
[ 'host' ]
server listening
server called
Response received
*/
