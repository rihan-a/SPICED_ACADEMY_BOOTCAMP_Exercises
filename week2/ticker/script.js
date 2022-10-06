// IIFE
(function () {
    let headlineContainer = document.querySelector("#headlines");

    let linkWidth = headlineContainer.firstElementChild.offsetWidth;
    let linkOffsetLeft = headlineContainer.firstElementChild.offsetLeft;
    let requestID;
    function move() {
        if (linkOffsetLeft === linkWidth * -1) {
            console.log("now shift");
            // move the first link to the end of the array
            headlineContainer.appendChild(headlineContainer.firstElementChild);
            // update the offsetWidth value
            linkOffsetLeft = headlineContainer.firstElementChild.offsetLeft;
        }

        linkOffsetLeft--;
        headlineContainer.style.left = `${linkOffsetLeft}px`;

        requestAnimationFrame(move);
    }

    requestAnimationFrame(move);

    headlineContainer.addEventListener("mouseover", stopTicker);
    headlineContainer.addEventListener("mouseleave", runTicker);
    function stopTicker() {
        console.log("in");
        console.log(requestID);
        requestID = requestAnimationFrame(move);
        cancelAnimationFrame(requestID);
    }

    function runTicker() {
        console.log("out");
        console.log(requestID);
        //requestID = requestAnimationFrame(move);
    }
})();
