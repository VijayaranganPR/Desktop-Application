/*
url.port is a property of the URL object in JavaScript that represents the port component of a URL, if present.

The port component of a URL is the part of the URL that specifies the port number on the server that the resource is located on. 
For example, in the URL https://www.example.com:8080/page, the port component is 8080.
*/

const url = new URL('https://www.example.com:8080/page')

console.log(url.port)           // 8080

url.port = '7272'

console.log(url.href)           // https://www.example.com:7272/page
