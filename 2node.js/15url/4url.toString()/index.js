/*
url.toString() is a method of the URL object in JavaScript that returns a string representation of the URL.

The toString() method returns the full URL, including the protocol, host, port, path, search parameters, and hash. 
*/

const url = new URL('https://www.example.com/page?key=value#hash')

console.log(url.toString())     // https://www.example.com/page?key=value#hash

