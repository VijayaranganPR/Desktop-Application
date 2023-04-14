/*
The message.destroy([error]) method in Node.js is a method of the http.ClientRequest class. 
It is used to abort a client request and destroy the underlying socket.
*/

var http = require('http');
var options = {
  host: 'www.google.com',
  port: 80,
  path: '/'
};

var req = http.get(options, function(res) {
  console.log('Response received');
});

req.setTimeout(100, function() {
  console.log('Request timed out');
  req.destroy();
});

req.on('error', function(err) {
  console.log('Request error: ' + err.message);
});


/*
Request timed out
Request error: socket hang up
*/