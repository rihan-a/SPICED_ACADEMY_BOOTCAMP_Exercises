//IIFE
(function () {
    // Variables
    let slider = document.querySelector(".slider");
    let foregroundContainer = document.querySelector(".foreground");
    let container = document.querySelector(".container");

    // sliding state
    let isSliding;

    // Image offset from the screen left side 0
    let imgOffsetLeft = container.offsetLeft;

    // check if the user pressed on the slider
    slider.addEventListener("mousedown", function (event) {
        event.preventDefault();
        console.log("Mouse down on slider");
        isSliding = true;
    });
    // check if the user stopped using the the slider
    container.addEventListener("mouseup", function (event) {
        event.preventDefault();
        console.log("Mouse up from slider");
        isSliding = false;
    });

    container.addEventListener("mousemove", (event) => {
        if (isSliding == true) {
            // change the image contaner width to the actual mouse movement
            foregroundContainer.style.width = `${
                event.clientX - imgOffsetLeft
            }px`;
        }
    });
})();
