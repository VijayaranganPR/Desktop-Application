/*
url.hash is a property of the URL object in JavaScript that represents the fragment identifier component of a URL.

The fragment identifier is the part of a URL that comes after the # symbol and is typically used to identify a specific section or element on a page. 
For example, in the URL https://www.example.com/page#section1, the fragment identifier is #section1.
*/

const url = new URL('https://www.example.com/path/to/page?query=value#section1')

console.log(url.hash)   // #section1

url.hash = 'section2'

console.log(url.href)   // https://www.example.com/path/to/page?query=value#section2
