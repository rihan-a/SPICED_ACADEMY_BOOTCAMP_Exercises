//  Part02
const { readdirSync, statSync, writeFileSync } = require("fs");
const { join } = require("path");

const mapSizes = (path) => {
    let treeObject = {};
    const dirEntries = readdirSync(path, { withFileTypes: true });

    dirEntries.forEach((dirEntry) => {
        const entryPath = join(path, dirEntry.name);
        // for each entry decide if it's a file or a directory
        if (dirEntry.isFile()) {
            // for files, add property to treeObject containing the file size - with use of fs.statSync
            let fileObject = { [dirEntry.name]: statSync(entryPath).size };
            treeObject = {
                ...treeObject,
                ...fileObject,
            };
        } else if (dirEntry.isDirectory()) {
            // for directories, add property to treeObject - with the value of a recursive call to mapSizes
            let dirValue = mapSizes(entryPath);
            let dirObject = { [dirEntry.name]: dirValue };
            treeObject = {
                ...treeObject,
                ...dirObject,
            };
        }
    });

    return treeObject;
};

const filesObject = mapSizes(join(__dirname, "files"));
//console.log(filesObject);
const stringifiedFilesObject = JSON.stringify(filesObject, null, 4);
console.log(stringifiedFilesObject);

// exporting the object as json file
writeFileSync("files.json", stringifiedFilesObject);
