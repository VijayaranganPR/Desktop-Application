/*
The response.sendDate property in Node.js is a boolean value that indicates whether to include the "Date" header in the HTTP response. 
If true, the "Date" header will be automatically set to the current date and time in UTC format. 
By default, response.sendDate is set to true in most Node.js HTTP server implementations.
*/
const http = require('http')

const server = http.createServer((req, res) => {
    // Disable the "Date" header in the response

    res.sendDate = false // true by default
    res.write('Hello, World!')
    // there won't be any data header.
    console.log(res.sendDate); // false - check the network tab in dev
    res.end()
})

server.listen(3000)

const client = http.request('http://localhost:3000/', (res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    })
})
client.end()

setTimeout(() => {
    server.close()
}, 10000);

/*
false
Hello, World!
*/