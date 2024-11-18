function add(numOne, numTwo) {

    if (numOne === "") {
        return numTwo;
    }
    if (numTwo === "") {
        return numOne;
    }
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    return (numOne + numTwo).toString();
}

function subtract(numOne, numTwo) {
    if (numOne === "") {
        return numTwo;
    }
    if (numTwo === "") {
        return numOne;
    }
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);

    return (numOne - numTwo).toString();
}

function multiply(numOne, numTwo) {
    if (numOne === "") {
        return numTwo;
    }

    if (numTwo === "") {
        return numOne;
    }

    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);

    return (numOne * numTwo).toString();
}

function divide(numOne, numTwo) {
    if (numTwo === "0") {
        return "LOL"
    }

    if (numOne === "") {
        return numTwo;
    }
    if (numTwo === "") {
        return numOne;
    }

    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);

    return (numOne / numTwo).toString();
}

function operate(numOne, operator, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);

        case "-":
            return subtract(numOne, numTwo);

        case "*":
            return multiply(numOne, numTwo);

        case "/":
            return divide(numOne, numTwo);
    }
}

//Populate row divs with buttons
const container = document.querySelector(".buttons")
for (let i = 0; i < 5; i++) {
    let btnCount = 4;
    const row = document.createElement("div");
    row.classList.add("row");

    if (i === 4) {
        btnCount = 3;
        row.setAttribute("id", "last-row");
    }
    for (let j = 0; j < btnCount; j++) {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        row.appendChild(btn);

        if (j === 0 && btnCount === 3) {
            btn.setAttribute("id", "zero");
        }
    }
    container.appendChild(row);
}

//Add textContent and classes to buttons

const iconArray = ["AC", "+/-", "%", "/", "7", "8", "9", 
    "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

const buttons = Array.from(document.querySelectorAll(".btn"));
const operatorArray = ["+", "-", "/", "*"];
const specialArray = ["AC", "+/-", "%", ".", "="];
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    let buttonText = iconArray[i];
    button.textContent = buttonText;
    if (operatorArray.includes(buttonText)) {
        button.classList.add("operator");
    } else if (specialArray.includes(buttonText)) {
        button.classList.add("special");
    } else {
        button.classList.add("number");
    };
}

//Add event listeners to buttons and Set Display

//Display Variables
let currentNum = "";
let operator = "";
let previousNum = "";
const display = document.querySelector(".display");

//Function to update display
function updateDisplay(newDisplayText) {
    if (newDisplayText.length > 12) {
        newDisplayText = newDisplayText.substring(0,12);
    }
    display.textContent = newDisplayText;
}

//Arrays of buttons seperated by class... (classism) (classy?)
const numberButtons = Array.from(document.querySelectorAll(".number"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const specialButtons = Array.from(document.querySelectorAll(".special"));

for (let i = 0; i < numberButtons.length; i++) {
    let button = numberButtons[i];
    button.addEventListener("click", () => {
        currentNum += button.textContent;
        updateDisplay(currentNum);
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    let button = operatorButtons[i];
    button.addEventListener("click", () => {
        if (!(operator === "")) {
            previousNum = operate(previousNum, operator, currentNum);
            currentNum = "";
            updateDisplay(previousNum);
        }
        operator = button.textContent;
        previousNum = operate(previousNum, operator, currentNum);
        currentNum = "";
        updateDisplay(previousNum);
    });
}

for (let i = 0; i < specialButtons.length; i++) {
    let button = specialButtons[i];
    let buttonText = button.textContent;

    switch (buttonText) {
        case "AC":
            button.addEventListener("click", () => {
                currentNum = "";
                previousNum = "";
                operator = "";
                updateDisplay(previousNum);
            });
            break;

        case "+/-":
            button.addEventListener("click", () => {
                currentNum = operate(currentNum, "*", -1);
                updateDisplay(currentNum);
            });
            break;

        case "%":
            button.addEventListener("click", () => {
                currentNum = operate(currentNum, "/", 100);
                updateDisplay(currentNum);
            });
            break;

        case "=":
            button.addEventListener("click", () => {
                if (!(previousNum === "" || currentNum === "")) {
                    previousNum = operate(previousNum, operator, currentNum);
                    currentNum = "";
                    operator = "";
                    updateDisplay(previousNum);
                }
            });
            break;

        case ".":
            button.addEventListener("click", () => {
                if (!currentNum.includes(".")) {
                    currentNum += button.textContent;
                    updateDisplay(currentNum);
                }
            });
            break;
    }
}


