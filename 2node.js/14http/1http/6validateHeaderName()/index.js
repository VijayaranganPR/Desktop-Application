/*
http.validateHeaderName(name[, label]) is a method in the Node.js http module used to validate HTTP header names. 
It returns true if the header name is valid, and false otherwise. 

The optional label parameter is used to provide a custom error message in the case of invalid header names.
*/

const http = require('http');

const headerName = 'Content-Type';
const label = 'Header Name';

if (http.validateHeaderName(headerName, label)) {
  console.log(`${headerName} is a valid ${label}`);
} else {
  console.log(`${headerName} is not a valid ${label}`);
}

/*
Content-Type is not a valid Header Name
*/