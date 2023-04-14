/*
The http.get() method in Node.js is used to make a GET request to a specified URL.

options: an object that contains the options for the request, such as the URL, headers, and other properties.
callback: an optional function that is called when the response is received. It has two parameters: response and error.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello, World!')
})

server.listen(3000,() => {
    const options = {
        host: 'localhost',
        port: '3000',
        path: '/',
        method: 'get'
    }

    const req = http.get(options, (response) => {
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