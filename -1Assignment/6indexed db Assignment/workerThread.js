const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((request, response) => {
    console.log(request.url)

    let filePath = '.' + request.url
    if(filePath === './favicon.ico' || filePath === './') filePath = './index.html'
    if(filePath === './index.html' || filePath === './app.js'){
        const extname = String(path.extname(filePath)).toLowerCase();

        let contentType = 'text/html'

        const mineTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json'
        }

        contentType = mineTypes[extname]
        
        fs.readFile(filePath, function(error, content) {
            if(error) throw error

            response.writeHead(200, {'Content-Type': contentType})
            response.end(content)
        })
        
    } 
})

server.listen(4000, () => console.log('server listening to port 4000'))
