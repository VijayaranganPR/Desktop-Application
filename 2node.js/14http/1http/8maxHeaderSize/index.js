/*
The http.maxHeaderSize in Node.js is a property that sets the maximum size of incoming HTTP headers in bytes.
This property can be used to limit the amount of memory that is consumed by incoming headers and can help prevent denial-of-service attacks. 
The default value of http.maxHeaderSize is 8KB. To increase or decrease the limit, the property can be changed at runtime. 

For example, to set the maximum header size to 16KB:
*/

const http = require('http')

http.maxHeaderSize = 3;
http.globalAgent.maxHeaderSize = 3;

const server = http.createServer((req,res) => {
    res.end('Hello, World!')
})
server.listen(3000, () => {
    console.log(http.globalAgent.maxHeaderSize)
    console.log(http.maxHeaderSize)
})

setTimeout(() => {
    server.close()
}, 5000);



/*
3
16384
*/
