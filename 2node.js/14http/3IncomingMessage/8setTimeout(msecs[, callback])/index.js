/*
The setTimeout() method in Node.js HTTP module is used to set a timeout value for the HTTP request. The method takes two arguments:

msecs (required): This is the time in milliseconds after which the request will time out.

callback (optional): This is a function that will be called when the timeout occurs.

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