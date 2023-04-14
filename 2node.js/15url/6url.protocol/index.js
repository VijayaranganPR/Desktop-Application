/*
url.protocol is a property of the URL object in JavaScript that represents the protocol component of a URL.

The protocol component of a URL specifies the protocol used to access the resource, such as http, https, or ftp. For example, 
in the URL https://www.example.com/page, the protocol component is https.
*/

const url = new URL('https://www.example.com/page')

console.log(url.protocol)       // https:

url.protocol = 'ftp'

console.log(url.href)           // ftp://www.example.com/page
