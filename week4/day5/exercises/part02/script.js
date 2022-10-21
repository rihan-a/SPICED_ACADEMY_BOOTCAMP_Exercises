//Part02
//Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it.
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4, 5]));
