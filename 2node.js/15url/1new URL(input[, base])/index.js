/*
The new URL(input[, base]) is a constructor for the URL object in JavaScript.

input is the URL string to be parsed, while base (optional) is the base URL used to resolve the relative URL. 
If base is not provided, the current document's URL will be used as the base URL.

The URL object provides properties and methods to access and manipulate the components of a URL, such as the protocol, host, path, and query string.
*/

let urlString = "https://www.example.com/path/to/page?query=value#hash";
let myURL = new URL(urlString);

console.log("Protocol: " + myURL.protocol);  // "https:"
console.log("Host: " + myURL.host);  // "www.example.com"
console.log("Pathname: " + myURL.pathname);  // "/path/to/page"
console.log("Search: " + myURL.search);  // "?query=value"
console.log("Hash: " + myURL.hash);  // "#hash"


const baseURLString = 'https://www.example.com/'
const pathURLString = '../page'

myURL = new URL(pathURLString, baseURLString)

console.log(myURL.href)         // https://www.example.com/page
