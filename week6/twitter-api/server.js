// adds all the variables in .env to process.env!
require("dotenv").config();
// import node modules
const path = require("path");
const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
const { PORT } = process.env;

const newsSources = ["nytimes", "theonion", "bbc"];

// serve ticker prokject folder
app.use(express.static(path.join(__dirname, "ticker")));

app.get("/headlines.json", (req, res) => {
    // 1. get a token
    // 2. get tweets
    // 3. filter & format the tweets
    // 4. respond with JSON
    getToken()
        .then((accessToken) => {
            Promise.all([
                getTweets(accessToken, newsSources[0]),
                getTweets(accessToken, newsSources[1]),
                getTweets(accessToken, newsSources[2]),
            ]).then((tweets) => {
                const filteredTweets = filterTweets(tweets);
                res.json(filteredTweets);
            });
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log(error);
        });
});

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`);
});
