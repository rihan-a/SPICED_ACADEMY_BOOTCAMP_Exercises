const hamburgerMenu = document.querySelector("#hamburger-menu");
const sideMenuContainer = document.querySelector("#side-menu");
const closeMenu = document.querySelector(".close-menu");
const overlayBackground = document.querySelector("#overlay");

hamburgerMenu.addEventListener("click", openSideMenu);

// function to move the aside menu and display the overlay background
function openSideMenu() {
    console.log("clicked");
    sideMenuContainer.classList.remove("move-right");
    overlayBackground.style.display = "block";
}
