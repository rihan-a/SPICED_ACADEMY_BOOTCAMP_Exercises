let x;
let doubleX;

x = Math.floor(Math.random() * 1000);

console.log(x);

function timesTwo(num) {
    return num * 2;
}

doubleX = timesTwo(x);
console.log(doubleX);

let numbers;

numbers = [x, doubleX];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers = {};

console.log(numbers);

numbers.y = doubleX;

console.log(numbers.y);
