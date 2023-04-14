/*
url.href is a property of the URL object in JavaScript that represents the entire URL string of the URL object.

It contains the full URL, including the protocol, host, port, path, query string, and fragment identifier components. 
*/

const url = new URL('https://www.example.com:8080/path/to/page?query=value#hash')

console.log(url.href)       // https://www.example.com:8080/path/to/page?query=value#hash

url.href = 'https://localhost:3000/new/path'

console.log(url.href)       // https://localhost:3000/new/path
