// IIFE
(function () {
    // Variables
    //let headlineContainer = document.querySelector("#headlines");
    let $headlineContainer = $("#headlines");

    //let headlinesArr = document.querySelectorAll(".headline-link");
    let $headlinesArr = $(".headline-link");

    let linkWidth = $headlinesArr[0].offsetWidth;

    let linkOffsetLeft = $headlinesArr[0].offsetLeft;
    let requestID;

    function move() {
        if (linkOffsetLeft === linkWidth * -1) {
            console.log("now shift");
            // move the first link to the end of the array
            $headlineContainer[0].appendChild($headlinesArr[0]);
            // update the offsetWidth value
            linkOffsetLeft = $headlinesArr[0].offsetLeft;
        }

        linkOffsetLeft--;
        //$headlineContainer[0].style.left = `${linkOffsetLeft}px`;
        $($headlineContainer[0]).css("left", linkOffsetLeft);

        requestID = requestAnimationFrame(move);
    }

    requestAnimationFrame(move);

    // for (let i = 0; i < headlinesArr.length; i++) {
    //     headlinesArr[i].addEventListener("mouseover", stopTicker);
    //     headlinesArr[i].addEventListener("mouseleave", runTicker);
    // }

    $headlinesArr.mouseover(function () {
        stopTicker();
    });
    $headlinesArr.mouseleave(function () {
        runTicker();
    });

    // function to stop the ticker
    function stopTicker() {
        console.log("in");
        //console.log(requestID);
        cancelAnimationFrame(requestID);
    }

    // function to resume the ticker
    function runTicker() {
        console.log("out");
        requestID = requestAnimationFrame(move);
    }
})();
