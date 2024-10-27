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