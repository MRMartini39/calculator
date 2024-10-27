function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
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

//Add textContent to buttons

const icons = ["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

const buttons = Array.from(document.querySelectorAll(".btn"));

for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = icons[i];
}