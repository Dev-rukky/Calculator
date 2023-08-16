const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "-", "+", "/", "="];
let result = "";


const calculate = (btnVal) => {
    if (btnVal === "=" && result !== "") {
        result = eval(result.replace("%", "/100"));
    } else if (btnVal === "AC") {
        result = "";
    } else if (btnVal === "DEL") {
        result = result.toString().slice(0, -1);
    } else {
        if (result === "" && specialChars.includes(btnVal)) return;
        result += btnVal;
    }
    display.value = result;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// display.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         calculate("=");
//     }
// });

// display.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         calculate("=");
//     }
// });