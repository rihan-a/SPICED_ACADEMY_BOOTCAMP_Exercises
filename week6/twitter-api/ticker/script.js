// IIFE
(function () {
    window.onload = () => {
        console.log("loaded");
        getNews();
    };

    // fetch news from server
    function getNews() {
        fetch("headlines.json")
            .then((response) => response.json())
            .then((data) => {
                printNews(data);
                ticker();
            })
            .catch((err) => console.log(err));
    }
    // inject html tags
    function printNews(data) {
        data.forEach((element) => {
            document.querySelector("#headlines").innerHTML += `
 <a class="headline-link" target="_blank" href="${element.url}" 
                    > <img src="./Twitter-logo.svg" alt="Twitter-logo"> (${element.source}) - ${element.tweet}</a
                >`;
        });
    }

    // ticker function
    function ticker() {
        let headlineContainer = document.querySelector("#headlines");
        let headlinesArr = document.querySelectorAll(".headline-link");
        let linkWidth = headlineContainer.firstElementChild.offsetWidth;
        let linkOffsetLeft = headlineContainer.firstElementChild.offsetLeft;
        let requestID;

        function move() {
            if (linkOffsetLeft === linkWidth * -1) {
                console.log("now shift");
                // move the first link to the end of the array
                headlineContainer.appendChild(
                    headlineContainer.firstElementChild
                );
                // update the offsetWidth value
                linkOffsetLeft = headlineContainer.firstElementChild.offsetLeft;
            }

            linkOffsetLeft = linkOffsetLeft - 1;
            headlineContainer.style.left = `${linkOffsetLeft}px`;

            requestID = requestAnimationFrame(move);
        }

        requestAnimationFrame(move);

        for (let i = 0; i < headlinesArr.length; i++) {
            headlinesArr[i].addEventListener("mouseover", stopTicker);
            headlinesArr[i].addEventListener("mouseleave", runTicker);
        }

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
    }
})();
