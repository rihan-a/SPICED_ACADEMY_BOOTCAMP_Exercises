// Part01
function Rectangle(width, length) {
    this.width = width;
    this.length = length;
    this.getArea = function () {
        return this.width * this.length;
    };
}

function Square(length) {
    this.length = length;
}

Square.prototype.getArea = function () {
    let newObject = new Rectangle(this.length, this.length);
    return newObject.getArea();
};

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
