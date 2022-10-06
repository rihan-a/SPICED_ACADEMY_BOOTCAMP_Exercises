let bigBox = document.querySelector(".big-box");
let smallBox = document.querySelector(".small-box");

bigBox.addEventListener("mousedown", changeBackground);

function changeBackground(e) {
    console.log(e.target.className);
    // generate random color
    let reds = Math.floor(Math.random() * 256);
    let blues = Math.floor(Math.random() * 256);
    let greens = Math.floor(Math.random() * 256);

    // check which box is being clicked
    if (e.target.className == "big-box") {
        bigBox.style.background = `rgb(${reds},${blues},${greens})`;
    } else {
        smallBox.style.background = `rgb(${reds},${blues},${greens})`;
    }
}
