// 01
//Write a function that expects a string representing a selector to be passed as a parameter.
//The function should find all the elements in the document that match the selector
//and change their style so that the text they contain is italic, underlined, and bold.

function changeStyle(selector) {
    // select all html elements of the same type
    let selectorArr = document.querySelectorAll(selector);
    console.log(selectorArr);
    // loop over the selected html elements and apply a style on them
    selectorArr.forEach((element) => {
        element.style.textDecoration = "underline";
        element.style.fontStyle = "italic";
        element.style.fontWeight = "bold";
        element.style.color = "blue";
    });
}

changeStyle("h1");
