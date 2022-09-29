// part 1
function sum() {
    let totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    }
    return totalSum;
}
let result = sum(5, 10, 15, 100, 200);
console.log(result);

// part 2
function waitThenRun(wait) {
    setTimeout(wait, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    });
});

// part 3
function check(num) {
    if (num < 0 || num === 0 || isNaN(num)) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        return check(num * 10);
    }
}

console.log(check(10));

// Bonus
function getTotaler() {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    };
}

let totaler = getTotaler();

console.log(totaler(1)); //1
console.log(totaler(2)); //3
console.log(totaler(5)); //8
