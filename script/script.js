function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
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

function isDecimal(num) {
    return num % 1 !== 0;
}

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
            result = subtract(number1, number2);
            break;
        case 'x':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            alert('please enter a valid operator')
            break;
    }

    if (isDecimal(result)) {
        return result.toFixed(2);
    }
    return result;
}

// list of UI
const screen = document.querySelector('.screen');

const numberContainer = document.querySelector('#number-container');
const number = document.querySelectorAll('.number');
    const zero = document.querySelector('.zero');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const seven = document.querySelector('.seven');
    const eight = document.querySelector('.eight');
    const nine = document.querySelector('.nine');

const optContainer = document.querySelector('#operator-container');
const operatorBtn = document.querySelectorAll('.operator');
    const divideBtn = document.querySelector('.divide');
    const multiplyBtn = document.querySelector('.multiply');
    const subtractBtn = document.querySelector('.subtract');
    const addBtn = document.querySelector('.add');
    const equalBtn = document.querySelector('.equal');

const clearBtn = document.querySelector('.clear');


if (!screen.textContent) {screen.textContent = '0';}

// display number on screen onclick
function displayNumber(event) {
    let screenText = screen.textContent;
    const numberClicked = event.target.textContent;

   if (screenText === '0') {
     screenText = numberClicked;
   } else {
    screenText += numberClicked;
   }
   screen.textContent = screenText;
}

function displayOperator(event) {
    let screenText = screen.textContent;
    const optClicked = event.target.textContent;
    screenText = optClicked;
    screen.textContent = screenText;
}

let number1 = '';
let number2 = '';
let operator = '';
let result = '';

// Number handler
number.forEach(button => button.addEventListener('click', event => {
    const num = event.target.textContent;
    if (!operator) {
        number1 += num;
        screen.textContent = number1;
    } else {
        number2 += num;
        screen.textContent = number2;
    }
}))

// Operator handler
operatorBtn.forEach(button => button.addEventListener('click', event => {
    if (number1 && !operator) {
        operator = event.target.textContent;
        screen.textContent = operator;
    } else if (number1 && operator && number2) {
        result = operate(parseFloat(number1), operator, parseFloat(number2));
        screen.textContent = result;

        // reset the value after calculating
        operator = event.target.textContent;
        number1 = result;
        number2 = '';
        result = '';
    }
}))

// equal handler
equalBtn.addEventListener('click', () => {
    if (number1 && operator && number2) {
        result = operate(parseFloat(number1), operator, parseFloat(number2));
        screen.textContent = result;
    } else if (parseFloat(number1) === 0, operator === '/', parseFloat(number2) !== 0 ) {
        screen.textContent = `are you mad? you can't divide zero with other number`
    }
})

clearBtn.addEventListener('click', () => {
    number1 = '';
    number2 = '';
    operator = '';
    result = '';
    screen.textContent = '0';
})