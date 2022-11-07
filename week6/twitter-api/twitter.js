const https = require("https");
const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;

module.exports.getToken = () => {
    return new Promise(function (resolve, reject) {
        const credentials = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
        const encodedCredentials = Buffer.from(credentials).toString("base64");
        const config = {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCredentials}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        const getTokenCallback = (result) => {
            if (result.statusCode !== 200) {
                //console.log(result);
                reject(result.statusCode);
                return;
            }

            let body = "";
            result
                .on("data", (chunk) => (body += chunk))
                .on("error", (error) => {
                    console.log(error);
                    reject(error);
                })
                .on("end", () => {
                    const data = JSON.parse(body);
                    resolve(data.access_token);
                });
        };

        const request = https.request(config, getTokenCallback);
        request.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = (token, screenName) => {
    return new Promise((resolve, reject) => {
        //console.log({ token });
        const config = {
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const getTweetsCallback = (result) => {
            if (result.statusCode !== 200) {
                reject(result.statusCode);
                return;
            }

            let body = "";
            result
                .on("data", (chunk) => (body += chunk))
                .on("error", (error) => {
                    console.log(error);
                    reject(error);
                })
                .on("end", () => {
                    const data = JSON.parse(body);
                    resolve(data);
                });
        };

        const request = https.request(config, getTweetsCallback);
        request.end("grant_type=client_credentials");
    });
};

// filter the raw data to get tweet text and url
module.exports.filterTweets = (tweets) => {
    //console.log(tweets);
    //console.log(tweets.length);
    let tweetsJSON = [];

    // flat tweets array and sort them in reverse chronological order
    let sortedTweets = tweets
        .flat()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    sortedTweets.forEach((tweet) => {
        //console.log(tweet.user.name);
        let tweetText = tweet.text.split("https");
        if (tweet.entities.urls[0]) {
            tweetsJSON = [
                ...tweetsJSON,
                {
                    source: tweet.user.name,
                    tweet: tweetText[0],
                    url: tweet.entities.urls[0].url,
                },
            ];
        }
        return;
    });

    return tweetsJSON;
};
