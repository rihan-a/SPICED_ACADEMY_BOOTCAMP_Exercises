//02
//Write a function that expects a string representing a class name to be passed as a parameter.
//The function should return an array containing all the elements in the document that have the class that was passed in.

function returnElements(className) {
    let elementsArr = Array.from(document.querySelectorAll(`.${className}`));
    return elementsArr;
}

console.log(returnElements("hello"));
