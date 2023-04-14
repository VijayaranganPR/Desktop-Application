/*
The host component of a URL is the domain name or IP address of the server hosting the web page, 
while the port component is the number that specifies the port on which the server is listening for HTTP requests. 

For example, in the URL https://www.example.com:8080/page, the host component is www.example.com:8080.
*/

const url = new URL('https://www.example.com:8080/page')

console.log(url.host)       // www.example.com:8000

url.host = 'localhost:7272'

console.log(url.href)       // https://localhost:7272/page
