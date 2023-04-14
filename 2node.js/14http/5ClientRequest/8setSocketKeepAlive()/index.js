/*
The request.setSocketKeepAlive(enable, initialDelay) method in Node.js's HTTP module is used to set the keep-alive option for a socket. 
The first argument enable is a boolean value that specifies whether to enable or disable keep-alive. 
The second argument initialDelay is an optional integer value that specifies the number of milliseconds to wait before sending the first keep-alive probe. 
The default value for initialDelay is 1000ms (1 second). This method returns the request object, allowing for method chaining.
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

// setTimeout(() => server.close(), 1000)

var options = {
  host: 'localhost',
  port: 3000,
  path: '/',
  headers: {contentType: 'text/plain'}
  
};

var request = http.get(options, function(res) {
  console.log('Response received');
});


request.setSocketKeepAlive(true,10000)
request.end()

/*
[ 'contentType', 'Host' ]
server listening
server called
Response received
*/
