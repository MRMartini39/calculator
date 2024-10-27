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
            break;

        case "-":
            return subtract(numOne, numTwo);
            break;

        case "*":
            return multiply(numOne, numTwo);
            break;
        case "/":
            return divide(numOne, numTwo);
    }
}

//Populate row divs
const container = document.querySelector(".buttons")
for (let i = 0; i < 5; i++) {
    let btnCount = 4;
    const row = document.createElement("div");
    row.classList.add("row");
    if (i === 4) {
        btnCount = 3;
    }
    for (let j = 0; j < btnCount; j++) {
        const btn = document.createElement("button");
        btn.classList.add("btn");
        row.appendChild(btn);
    }
    container.appendChild(row);
}