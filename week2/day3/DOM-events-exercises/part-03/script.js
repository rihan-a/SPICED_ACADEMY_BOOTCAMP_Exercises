let box = document.querySelector(".box");

box.addEventListener("mousedown", backgroundChange);
box.addEventListener("mouseup", backgroundChange);

function backgroundChange() {
    let reds = Math.floor(Math.random() * 256);
    let blues = Math.floor(Math.random() * 256);
    let greens = Math.floor(Math.random() * 256);
    box.style.background = `rgb(${reds},${blues},${greens})`;
}
