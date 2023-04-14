/*
The domainToASCII method is a part of the URL API in JavaScript and is used to convert the given domain name to ASCII-encoded form. 
The method returns a string containing the ASCII-encoded form of the input domain.
*/

import url from 'node:url'

console.log(new URL('http://example.com').domainToASCII("example.com"))