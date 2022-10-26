// import http module from node
const http = require("http");

// create a server
http.createServer((request, response) => {
    //For each request, log the method, url, and request headers to the console
    console.log("this is the http method: ", request.method);
    console.log("this url was requested: ", request.url);
    console.log("this is the http headers: ", request.headers);

    // this part parses the request body
    let body = [];
    // if request method is HEAD
    if (request.method === "HEAD") {
        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        // if request method is GET
    } else if (request.method === "GET") {
        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        response.write(
            "<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>"
        );
        response.end();
        // if request method is POST
    } else if (request.method === "POST") {
        request.on("data", (chunk) => {
            body.push(chunk);
        });

        request.on("end", () => {
            body = Buffer.concat(body).toString();
            console.log("this is the body: ", body);
            response.on("error", (err) => {
                console.log(err);
            });
        });
        response.setHeader("Location", "/");
        response.statusCode = 302;
    } else {
        response.statusCode = 405;
    }
}).listen(8080, () => {
    console.log("server listening on port 8080");
});
