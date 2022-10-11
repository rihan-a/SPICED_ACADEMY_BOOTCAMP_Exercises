(function () {
    // variables
    const images = document.querySelectorAll("img.kitty");
    const dots = document.querySelectorAll("div.dot");

    let currentImageIndex = 0;
    let isTransitioning;
    let timeOutID;

    function moveImages() {
        // remove the intial onscreen class from the first image and adding the hidden-left class to move the image offscreen to the left
        images[currentImageIndex].classList.remove("onscreen");
        images[currentImageIndex].classList.add("hidden-left");

        isTransitioning = true;
        currentImageIndex++;

        // calling the function to set the dot for the current index
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        setDot(currentImageIndex);

        // add the class onscreen to the next kitty image in the list
        images[currentImageIndex].classList.add("onscreen");
        timeOutID = setTimeout(moveImages, 3000);
    }

    // selecting the transitionend kitty image to remove the hidden-left class
    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("hidden-left")) {
            e.target.classList.remove("hidden-left");
            isTransitioning = false;
        }
    });

    // start the carousel for the first time
    timeOutID = setTimeout(moveImages, 2000);

    // setting the dots
    function setDot(currentImageIndex) {
        dots.forEach((dot) => {
            dot.classList.remove("current");
        });
        dots[currentImageIndex].classList.add("current");
    }

    dots.forEach((dot, id) => {
        dot.addEventListener("click", () => {
            console.log("clicked" + id);
            // if the clicked image equals the current image, igonre clicking
            if (currentImageIndex == id) {
                console.log("it's the same img!");
                return;
            }
            // if transitioning is active, ignore clicking
            if (isTransitioning == true) {
                console.log("no wait its transitioning");
                return;
            } else {
                clearTimeout(timeOutID);
                images[currentImageIndex].classList.remove("onscreen");
                images[currentImageIndex].classList.add("hidden-left");
                currentImageIndex = id;
                console.log(currentImageIndex);
                setDot(currentImageIndex);
                images[currentImageIndex].classList.remove("hidden-left");
                images[currentImageIndex].classList.add("onscreen");
                timeOutID = setTimeout(moveImages, 3000);
                console.log("yes now bring that img");
            }
        });
    });
})();
