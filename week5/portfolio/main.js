// import node modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// this gets us the full absolute path to the current directory
console.log(__dirname);

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

const server = http.createServer((request, response) => {
    if (request.method !== "GET") {
        request.statusCode = 400;
        request.end();
        return;
    }
    if (request.url === "/") {
        // create the home page
        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        response.write(
            `<!doctype html>
<html>
<title>Portfolio</title>
<link rel="stylesheet" href="style.css" />
<h1>Portfolio</h1>
        <div class= "projects-container">
            <div class="project">
            <a href="connect-4">CONNECT 4</a>
            </div>
            <div class="project">
            <a href="html-css-lab">HTML/CSS LAB</a>
            </div>
            <div class="project">
            <a href="carousel">CAROUSEL</a>
            </div>
            <div class="project">
            <a href="spotify-search">SPOTIFY SEARCH</a>
            </div>
        </div>
</html>`
        );
        response.end();
        return;
    }

    const filePath = path.join(__dirname, "projects", request.url);

    console.log("this is the file path>>", filePath);

    // is this path valid
    if (!fs.existsSync(filePath)) {
        response.writeHead(404);
        response.end("404");
        return;
    }

    if (fs.statSync(filePath).isFile()) {
        const fileExt = path.extname(filePath);
        const contentType = contentTypes[fileExt];
        response.writeHead(200, { "Content-Type": contentType });

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
        readStream.on("end", () => {
            // send the response
            response.end();
        });
    }
    if (fs.statSync(filePath).isDirectory()) {
        if (!filePath.endsWith("/")) {
            response.writeHead(301, { location: request.url + "/" });
            response.end();
            return;
        }
        response.writeHead(301, {
            location: path.join(request.url, "index.html"),
        });
        response.end();
        return;
    }
});

server.listen(8080, () => {
    console.log("server listening on port 8080");
});
