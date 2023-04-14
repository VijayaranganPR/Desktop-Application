/*
http.validateHeaderValue(value[, label]) is a method in the Node.js http module that validates an HTTP header value. It returns true if the header value is valid and false otherwise.

value is the header value to be validated. label is an optional string that provides a custom error message in case of an invalid header value.

This method is used to validate header values before setting them in an HTTP request or response, to ensure that the values conform to the constraints specified by the HTTP specification.
*/
const http = require('http');

const headerValue = 'text/plain';
const label = 'Header Value';

if (http.validateHeaderValue(headerValue, label)) {
  console.log(`${headerValue} is a valid ${label}`);
} else {
  console.log(`${headerValue} is not a valid ${label}`);
}


/*
text/plain is not a valid Header Value
*/