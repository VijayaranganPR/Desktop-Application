/*
Destroy the request. 

Optionally emit an 'error' event, and emit a 'close' event. 

Calling this will cause remaining data in the response to be dropped and the socket to be destroyed.
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