// part 01
function logType(input) {
    if (Array.isArray(input)) {
        console.log("array!");
    } else if (
        isNaN(input) &&
        typeof input != "string" &&
        typeof input != "object" &&
        input !== undefined
    ) {
        console.log("NaN!");
    } else if (Object.is(input, null)) {
        console.log("null!");
    } else if (typeof input === "undefined") {
        console.log("undefined!");
    } else {
        console.log(typeof input + "!");
    }
}

// Part 01 test
logType("hello");
logType({ name: "name", age: 25 });
logType(200);
logType([1, 2, 3]);
logType(NaN);
logType(null);
logType(undefined);

// part 02
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

let b = {};

for (let value in a) {
    //console.log(value + a[value]);
    b[a[value]] = value;
}
console.log(b);

// part 03
for (let i = 10; i > 0; i--) {
    console.log(i);
}
