console.log(id); // hoisted // returns undefined
var id = 42;

console.log(id); // retuns 42

// scope

// function declaration - this is hoisted
function greet() {
    var greeting = "hello";

    //console.log(greeting);
    return greeting;
}

//console.log(greeting);

console.log(greet());

// function expression
var greet2 = function () {
    console.log("hello2");
};

greet2();

//in javascript functions are 'first-class'

// iife - immediatly invoked functions expression
(function run() {
    console.log("running!");
})();

// arguments is an array that contains all arguments

function myConcat() {
    console.log(arguments);
}
myConcat("a", "b", "c");

// we can call functions inside functions

// functions also can be nested

function addSquares(a, b) {
    function square(x) {
        var product = x * x;
        return product;
    }
    return square(a) + square(b);
}

console.log(addSquares(5, 3));

// callbacks - a function is passed to another function

console.log("this logs now ");

setTimeout(function () {
    console.log("hey");
}, 3000);

// recursive functions

function factorial(num) {
    console.log(num);
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
// 4 * 3 * 2 * 1

console.log(factorial(4));

// nothing runs after the return !! once you return the functions stops
