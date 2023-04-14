/*
The domain.remove method in Node.js is used to remove an event emitter from a domain. 
When an event emitter is added to a domain, any errors that occur within the event emitter will be propagated to the domain's error event.
*/

const http = require('http')
const domain = require('domain')

const myDomain = domain.create()

const server = http.createServer((req, res) => {
    res.end()
}).listen(3000)


// adding server as emitter to my domain
myDomain.add(server)


setTimeout(() => {
    server.close()
}, 3000);

myDomain.on('error', (error) => {
    console.log(`Caught error: ${error}`)
})

// removeing server from domain
myDomain.remove(server)