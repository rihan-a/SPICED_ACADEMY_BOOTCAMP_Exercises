// part 01
function logType(input) {
    console.log(typeof input + "!");
}

logType("hello");
logType({ name: "name", age: 25 });
logType(200);

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
