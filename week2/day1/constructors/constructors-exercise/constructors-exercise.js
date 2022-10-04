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
