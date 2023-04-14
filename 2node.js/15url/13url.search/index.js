/*
url.search is a property of the URL object in JavaScript that represents the search component of a URL, if present.

The search component of a URL is the part of the URL that specifies query parameters for the resource, 
and starts with the ? symbol. For example, in the URL https://www.example.com/page?key=value, the search component is ?key=value.
*/

const url = new URL('https://www.example.com/page?key=value')

console.log(url.search)             // ?key=value

url.search = '?newkey=newvalue'

console.log(url.href)               // https://www.example.com/page?newkey=newvalue
