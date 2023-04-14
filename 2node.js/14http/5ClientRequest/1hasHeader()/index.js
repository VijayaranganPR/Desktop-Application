/*
In Node.js, the request object is commonly used to represent an incoming HTTP request. 
To check if a specific header is present in the request, you can use the hasHeader() method of the request object. 
This method returns a boolean indicating whether the specified header is present in the request or not.
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
console.log(request.hasHeader('host'))              // true
console.log(request.hasHeader('Content-Type'));     // false
request.end()

/*
true
false
server listening
server called
Response received
*/
