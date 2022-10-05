// Part01

function getArea() {
    return this.length * this.width;
}

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}
Rectangle.prototype.getArea = getArea;

function Square(length) {
    this.length = length;
    this.width = length;
}

Square.prototype.getArea = getArea;

// Part01 test
let rect = new Rectangle(4, 5);
console.log(rect.getArea());
let square = new Square(4);

console.log(square.getArea());

// Part02
function invertcase(str) {
    let strArray = str.split("");
    console.log(strArray);
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] == strArray[i].toUpperCase()) {
            strArray[i] = strArray[i].toLowerCase();
        } else {
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    let arrStr = strArray.join("");
    return arrStr;
}

// Part02 test
console.log(invertcase("RiHan%1$"));

// Bonus --
function Countdown(sec) {
    this.sec = sec;
    this.start = function () {
        for (let i = this.sec; i >= 0; i--) {
            console.log(i);
        }
    };
}

// Bonus test
let countdown = new Countdown(10);
countdown.start();
