// adds all the variables in .env to process.env!
require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter");

const { PORT } = process.env;

app.use(express.static(path.join(__dirname, "ticker")));

app.get("/headlines.json", (req, res) => {
    // 1. get a token
    // 2. get tweets
    // 3. filter & format the tweets
    // 4. respond with JSON

    getToken((error, token) => {
        // check for errors...
        // send back empty JSON if there is an error!
        if (error) {
            console.log(error);
            return;
        }
        getTweets(token, (error, tweets) => {
            //console.log("Got some tweets:", tweets);
            if (error) {
                console.log(error);
                return;
            }
            const filteredTweets = filterTweets(tweets);

            res.json(filteredTweets);
        });
    });
});

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`);
});
