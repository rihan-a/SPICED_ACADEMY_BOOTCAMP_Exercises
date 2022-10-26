// import node modules
const chalk = require("chalk");
const http = require("http");
const querystring = require("node:querystring");

// create a server
http.createServer((request, response) => {
    //For each request, log the method, url, and request headers to the console
    console.log("this is the http method: ", request.method);

    // this part parses the request body
    let body = [];

    if (request.method === "GET") {
        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        response.write(
            `<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`
        );
        response.end();
        // if request method is POST
    } else if (request.method === "POST") {
        request.on("data", (chunk) => {
            body.push(chunk);
        });
        request.on("end", () => {
            body = Buffer.concat(body).toString();
            //console.log("this is the body: ", body);
            const parsedBody = querystring.parse(body);
            //console.log("this is the parsed body", parsedBody);
            // console log the text in color using chalk
            console.log(chalk[parsedBody.color](parsedBody.text));

            response.write(`<!doctype html><html>
<title>${parsedBody.text}</title>
<a href="/" style="color:${parsedBody.color}">${parsedBody.text}</a>
</html>`);
            response.end();

            response.on("error", (err) => {
                console.log(err);
            });
        });
    }
}).listen(8080, () => {
    console.log("server listening on port 8080");
});
