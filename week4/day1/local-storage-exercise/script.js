// LocalStorage exercise
let textArea = document.querySelector("textarea");

textArea.addEventListener("keyup", () => {
    console.log(textArea.value);
    localStorage.setItem("textarea", textArea.value);
});

window.onload = () => {
    console.log("loaded");
    textArea.value = localStorage.getItem("textarea");
};
