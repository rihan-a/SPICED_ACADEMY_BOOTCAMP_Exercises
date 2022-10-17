const germanNumbers = [
    "eins",
    "zwei",
    "drei",
    "vier",
    "fünf",
    "sechs",
    "sieben",
    "acht",
    "neun",
    "zehn",
];

function translateNumberToGerman() {
    let number = askForNumber();
    console.log(number);
    for (let i = 0; i < germanNumbers.length; i++) {
        if (i == number) {
            alert(germanNumbers[i - 1]);
        }
    }
}

translateNumberToGerman();

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}
