const { readdir } = require("fs");
const { join } = require("path");

const logSizes = (path) => {
    readdir(path, { withFileTypes: true }, (err, dirEntries) => {
        dirEntries.forEach((entry) => {
            if (entry.isFile()) {
                console.log("is File:", entry.name);
            } else if (entry.isDirectory()) {
                console.log("is Directory:", entry.name);
            }
        });
    });
};

logSizes(join(__dirname, "files"));
