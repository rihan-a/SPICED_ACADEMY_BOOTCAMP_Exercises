const { readdirSync, stat } = require("fs");
const { join } = require("path");

// Part01
const logSizes = (path) => {
    readdir(path, { withFileTypes: true }, (err, dirEntries) => {
        dirEntries.forEach((entry) => {
            const entryPath = join(path, entry.name);
            stat(entryPath, (err, fileStats) => {
                console.log("%s: %d", entryPath, fileStats.size);
            });
            if (entry.isFile()) {
                console.log("is File:", entry.name);
            } else if (entry.isDirectory()) {
                console.log("is Directory:", entry.name);
                logSizes(entryPath);
            }
        });
    });
};

//logSizes(join(__dirname, "files"));
