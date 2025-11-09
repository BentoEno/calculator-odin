function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    if (!num1) {
        num1 = 0;
    }
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let number1;
let number2;
let operator;

function operate(number1, operator, number2) {
    if (!number1 && operator === '-') {
        number1 = 0;
    }
    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = substract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            alert('please enter a valid operator')
            break;
    }
    return result;
}