/*
The "message.complete" event in Node.js HTTP module is emitted when the response has been completely transmitted to the client. 
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello, World!')
})

server.listen(3000, () => {
    console.log('Server listening on port 3000')
    const req = http.request('http://localhost:3000',(res) => {

            // will be false because message is not fully completed
            console.log(res.complete)

            res.on('data', () => {
            // will be true because message is fully completed
            console.log(res.complete)
        })
    })
    req.end()
})

setTimeout(() => {
    server.close()
}, 2000);


/*
false
true
*/