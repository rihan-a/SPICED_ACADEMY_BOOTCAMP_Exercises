// LocalStorage exercise
let textArea = document.querySelector("textarea");
let checkBtn = document.querySelector("#check-btn");
let textAreaValue;

checkBtn.addEventListener("click", () => {
    textAreaValue = textArea.value;

    try {
        let json = JSON.parse(textAreaValue);
        console.log("Valid JSON");
        alert("Valid JSON");
    } catch (e) {
        console.log("Invalid JSON");
        alert("Invalid JSON");
    }
});
