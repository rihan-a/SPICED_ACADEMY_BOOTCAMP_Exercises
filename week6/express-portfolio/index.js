// import node modules
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");
const projectsJSON = require("./projects.json");
const app = express();
const PORT = 3000;

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// install middleware to help us read cookies easily
app.use(cookieParser());
// install middleware to help us read POST body (form data) easily
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//     // only send the file if the user has NOT accepted the cookies
//     // read the cookie!
//     const savedCookies = req.cookies;
//     const { consent } = savedCookies;

//     if (consent === "accepted") {
//         // send to homepage
//         let homePath = path.join(__dirname, "public", "index.html");
//         res.sendFile(homePath);
//         return;
//     } else {
//         // send to cookies page
//         let cookiePath = path.join(__dirname, "cookie", "index.html");
//         res.sendFile(cookiePath);
//         return;
//     }
// });

app.get("/", (req, res) => {
    res.render("portfolio", { projects: projectsJSON });
});

//app.use(express.static(path.join(__dirname, "cookie")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "projects")));

// app.post("/", (req, res) => {
//     // read data sent by the user in the form!
//     const body = req.body;
//     //console.log(body);
//     const { cookie } = body;

//     if (cookie == "true") {
//         res.cookie("consent", "accepted");
//         let homePath = path.join(__dirname, "public", "index.html");
//         res.sendFile(homePath);
//     } else {
//         // placeholder
//         res.send("Sorry, you have to accept cookies to access the website");
//     }
// });

// listen on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
