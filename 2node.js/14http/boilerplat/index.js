const http = require("http");
const fs = require("fs");
const path = require('path')
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    let filePath = "." + request.url;
    if (filePath == "./") filePath = "./index.html";

    const extname = String(path.extname(filePath)).toLowerCase();
    let contentType = "text/html";
    const mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".svg": "application/image/svg+xml",
    };

    contentType = mimeTypes[extname] // || "application/octet-stream";


    fs.readFile(filePath, function (error, content) {
        if (error) throw error

        response.writeHead(200, {
            'Content-Type': contentType
        })
        response.end(content)
    })
};

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
    if (error) {
        return console.log("something bad happened", error);
    }
    console.log(`server is listening on ${port}`);
});
