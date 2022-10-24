// Import Node modules
const url = require("node:url");
const querystring = require("node:querystring");

const userInput = process.argv;
const myURL = url.parse(userInput[2]);

const urlProtocol = myURL.protocol;
const urlHost = myURL.host;
const urlHostName = myURL.hostname;
const urlPort = myURL.port;
const urlPathName = myURL.pathname;
const urlQuery = myURL.query;

console.log("The protocol is", urlProtocol);
console.log("The host is", urlHost);
console.log("The hostname is", urlHostName);
console.log("The port is", urlPort);
console.log("The pathname is", urlPathName);

if (urlQuery) {
    console.log("The query is", urlQuery);
    const queryObject = querystring.parse(myURL.query);
    const { a, b } = queryObject;
    console.log(`The value of the a is ${a}`);
    console.log(`The value of the b is ${b}`);
} else {
    console.log("The query is", null);
}
