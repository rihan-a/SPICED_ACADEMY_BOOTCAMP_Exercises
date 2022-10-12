const hamburgerMenu = document.querySelector("#hamburger-menu");
const sideMenuContainer = document.querySelector("#side-menu");
const closeMenu = document.querySelector(".close-menu");
const overlayBackground = document.querySelector("#overlay");

hamburgerMenu.addEventListener("click", openSideMenu);

// function to open the aside menu and display the overlay background
function openSideMenu() {
    sideMenuContainer.classList.remove("move-right");
    overlayBackground.style.display = "block";
}

closeMenu.addEventListener("click", closeSideMenu);
//close side menu if pressed anywhere outside the sidebar
overlayBackground.addEventListener("click", closeSideMenu);

// function to close the aside menu and disable the overlay background
function closeSideMenu() {
    sideMenuContainer.classList.add("move-right");
    overlayBackground.style.display = "none";
}

// Modal using jQuery

let $modal = $(".modal");
let $modalClose = $(".close-modal");

// when page is loaded wait 1 sec then show the modal
$(window).ready(function () {
    setTimeout(function () {
        $modal.css("display", "flex");
        $(overlayBackground).css("display", "block");
    }, 1000);
});

// adding event listner to close the modal
$modalClose.click(() => {
    $modal.css("display", "none");
    $(overlayBackground).css("display", "none");
});
