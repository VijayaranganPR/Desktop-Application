/*
url.hostname is a property of the URL object in JavaScript that represents the host component of a URL, excluding the port component.

The host component of a URL is the domain name or IP address of the server hosting the web page. 
For example, in the URL https://www.example.com:8080/page, the host component is www.example.com.
*/

const url = new URL('https://www.example.com:8080/page')

console.log(url.hostname)           // www.example.com

url.hostname = 'localhost'

console.log(url.href)               // www.example.com
