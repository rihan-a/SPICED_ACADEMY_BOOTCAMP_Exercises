let box = document.querySelector(".box");

document.addEventListener("mousemove", (event) => {
    console.log(event);
    let posX = event.clientX;
    let posY = event.clientY;
    box.style.top = `${posY}px`;
    box.style.left = `${posX}px`;
});
