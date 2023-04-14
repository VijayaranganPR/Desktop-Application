/*
The req.url property in Node.js is a property of the http.IncomingMessage object that represents an HTTP request. 
It represents the URL of the requested resource, including the path and query string. 
This property can be used in an HTTP server to determine which resource the client is requesting, and to return the appropriate response.
*/
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello, world!')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('About page')
        res.end()
    }
    else{
        res.write('Not found')
        res.end()
    }
})

server.listen(8000, () => {
    console.log('Server listenting on port 8000')
})

/*
1)http://localhost:8000/
Hello World
2) http://localhost:8000/about
About Page
3) http://localhost:8000/something
Not found
*/