//03
//Write a function that inserts an element into the body of the currently loaded page.
//That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px,
//and contain the text 'AWESOME'.

function inserElement() {
    let element = document.createElement("div");
    // creating a text content to append into the element
    let content = document.createTextNode("AWESOME");

    element.appendChild(content);

    // adding styles to the created html element
    element.style.position = "fixed";
    element.style.zIndex = "2147483647";
    element.style.left = "20px";
    element.style.top = "100px";
    element.style.fontSize = "200px";

    // appending the created element to the html body
    document.body.appendChild(element);
}

inserElement();
