(function () {
    const images = document.querySelectorAll("img.kitty");

    let currentImageIndex = 0;

    function moveImages() {
        images[currentImageIndex].classList.remove("onscreen");
        images[currentImageIndex].classList.add("hidden-left");

        currentImageIndex++;

        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        if (!images[currentImageIndex].classList.contains("onscreen")) {
            images[currentImageIndex].classList.add("onscreen");
        }

        setTimeout(moveImages, 3000);
    }

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("hidden-left")) {
            e.target.classList.remove("hidden-left");
        }
    });

    setTimeout(moveImages, 1000);
})();
