const http = require("http");
const fs = require("fs");
const path = require('path')
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    let filePath = "." + request.url;
    if (filePath === "./" || filePath === './favicon.ico') filePath = "./index.html";

    if (filePath === './index.html' || filePath === './app.js') {
        const extname = String(path.extname(filePath)).toLowerCase();
        let contentType = "text/html";
        const mimeTypes = {
            ".html": "text/html",
            ".js": "text/javascript",
            ".css": "text/css",
            ".json": "application/json",
        };

        contentType = mimeTypes[extname] 


        fs.readFile(filePath, function (error, content) {
            if (error) throw error

            response.writeHead(200, {
                'Content-Type': contentType
            })
            response.end(content)
        })
    } else if (filePath === './write' && request.method === 'POST') {
        let body = '';

        request.on('data', chunk => {
            body += chunk.toString();
        });

        request.on('end', () => {
            fs.writeFileSync('newFile.txt', body)
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            response.end('Data received');
        });
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) {
        return console.log("something bad happened", error);
    }
    console.log(`server is listening on ${port}`);
});