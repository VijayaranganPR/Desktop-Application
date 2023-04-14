/*
http.get(url[, options][, callback]) is a method in the Node.js http module used to make GET requests to a specified URL.

url: A string that specifies the URL to make the GET request to.
options (optional): An object that specifies the options for the request, such as the hostname, port, path, headers, etc.
callback (optional): A callback function that will be called when the response is received. The callback takes two arguments: response and err. response is an instance of http.IncomingMessage that represents the response, and err is an error object in case an error occurs during the request.
*/

const { response } = require('express')
const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello, World!')
})

server.listen(3000,() => {
    const options = {
        method: 'get'
    }

    const req = http.get('http://localhost:3000/', options,(response) => {
        console.log(`statusCode: ${response.statusCode}`)

        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        })

        response.on('end', () => {
            console.log(data)
        })
    })
    req.on('error', (error) => {
        console.log(error)
    })
})

setTimeout(() => server.close(), 5000)

/*
statusCode: 200
Hello, World!
*/
