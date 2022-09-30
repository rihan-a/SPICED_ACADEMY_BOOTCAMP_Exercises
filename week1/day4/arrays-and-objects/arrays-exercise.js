// Part01
function each(list, callBack) {
    if (typeof list == "object") {
        for (let value in list) {
            callBack(list[value], value);
        }
    } else if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callBack(list[i], i);
        }
    }
}

// Part01 test
each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// Part02
function reverse(arr) {
    let reversedArr = [];
    arr.forEach((item) => {
        reversedArr.unshift(item);
    });
    return reversedArr;
}

// Part02 test
let originalArray = [1, 2, 3, 4];
let newArr = reverse(originalArray);

console.log(newArr);
console.log(originalArray);

// Part03
function getLessThanZero(arr) {
    let newArr = arr.filter((item) => {
        return item < 0;
    });
    return newArr;
}

// Part03 test
console.log(getLessThanZero([1, 2, -1, -90, 10]));
console.log(getLessThanZero([1, 2]));
