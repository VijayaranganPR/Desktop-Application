/*
url.origin is a property of the URL object in JavaScript that represents the origin of the URL, 
including the protocol and host components but excluding the port component.

The origin of a URL is the combination of the protocol and host components of a URL. 
For example, in the URL https://www.example.com:8080/page, the origin is https://www.example.com.


Note that the origin property is read-only and cannot be set or modified.
*/

const url = new URL('https://www.example.com:8080/page')

console.log(url.origin)     // https://www.example.com:8080
