const cluster = require("cluster");
const os = require("os");
const total = os.cpus().length;
const path = require("path");

cluster.setupPrimary({
    exec: path.join(__dirname, "./main.js"),
});

for (let i = 0; i < total; i++) {
    // this creates a child process
    cluster.fork();
}

let count = 0;
cluster.on("exit", (worker) => {
    console.log("process ended", worker.process.pid);
    count++;
    console.log(count);
    if (count === total) {
        console.log("all done ✅");
    }
});
