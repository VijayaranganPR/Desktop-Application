const http = require('http')
const server = http.createServer((req, res) => {
    console.log("server")
    res.write("inside write")
    res.end()
})

server.listen(3000,()=>{
    console.log("listen")
})

setTimeout(() => {
    console.log('closed')
    server.close()
}, 2000);



const req = http.request("http://localhost:3000/",(res) => {
    console.log("inside request")
    res.on("end", (err) =>{
        console.log('inside end')
    })

    res.on("data", (data) =>{
        console.log(data)
        console.log('inside data')
    })

})

console.log("outside request")
req.end()

/*
outside request
listen
server
inside request
inside write
inside data
inside end
closed
*/