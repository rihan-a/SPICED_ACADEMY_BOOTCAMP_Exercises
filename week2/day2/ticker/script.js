(function () {
    let headlineContainer = document.querySelector("#headlines");

    let linkWidth = headlineContainer.firstElementChild.offsetWidth;
    let linkOffsetWidth = headlineContainer.firstElementChild.offsetLeft;

    function move() {
        if (linkOffsetWidth === linkWidth * -1) {
            console.log("now shift");
            // move the first link to the end of the array
            headlineContainer.appendChild(headlineContainer.firstElementChild);
            // update the offsetWidth value
            linkOffsetWidth = headlineContainer.firstElementChild.offsetLeft;
        }

        linkOffsetWidth--;
        headlineContainer.style.left = `${linkOffsetWidth}px`;

        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);
})();
