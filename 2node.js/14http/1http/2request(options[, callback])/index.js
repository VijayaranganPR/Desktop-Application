/*
The http.request method in Node.js is used to make an HTTP request to a remote server. 
It returns an instance of the http.ClientRequest class, which represents the request. 
The options argument is an object that specifies the details of the request, such as the URL, method, headers, and more. 

The callback argument is an optional function that will be called when the response to the request is received.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello, World!')
})

server.listen(3000, () => {
    console.log('listening to port 3000: ')

    const option = {
        host: 'localhost',
        port: '3000',
        path: '/',
        method: 'get'
    }
    const req = http.request(option, (res) => {
        console.log(`status code: ${res.statusCode}`)

        res.on('data', data => {
            console.log(data.toString());
        });
    });

    req.end();
})

setTimeout(() => {
    server.close()
}, 5000);
