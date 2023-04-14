/*
url.pathname is a property of the URL object in JavaScript that represents the path component of a URL.

The path component of a URL is the part of the URL that specifies the location of a resource on the server. 
For example, in the URL https://www.example.com/path/to/page, the path component is /path/to/page.


*/

const url = new URL('https://www.example.com/path/to/page')

console.log(url.pathname)       // /path/to/page

url.pathname = '/new/path'

console.log(url.href)           // https://www.example.com/new/path
