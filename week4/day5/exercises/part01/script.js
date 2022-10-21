//Part01
//Write a function that takes an array as an argument and returns a new array containing
//all of the items that are in the array that was passed in but in reverse order. This function should

function reverseArray(arr) {
    let arrCopy = [...arr];

    return arrCopy.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));
