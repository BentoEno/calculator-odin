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
const screen = document.querySelector('.screen');

function operate(number1, operator, number2) {
    if (!number1 && operator === '-') {
        number1 = 0;
    } else if (number1 && operator === '/' && number2 == 0 ) {
        alert(`can't divide number with 0`)
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
    const decimal = document.querySelector('.decimal');
    const backspace = document.querySelector('.delete');

const optContainer = document.querySelector('#operator-container');
const operatorBtn = document.querySelectorAll('.operator');
    const divideBtn = document.querySelector('.divide');
    const multiplyBtn = document.querySelector('.multiply');
    const subtractBtn = document.querySelector('.subtract');
    const addBtn = document.querySelector('.add');
    const equalBtn = document.querySelector('.equal');

const clearBtn = document.querySelector('.clear');

let number1 = '';
let number2 = '';
let operator = '';
let result = '';

// Number handler
number.forEach(button => button.addEventListener('click', event => {
    const num = event.target.textContent;
    // code to start new calculation when user press number
    if (screen.textContent == result) {
        number1 = '';
        number2 = '';
        result = '';
        operator = '';
    }
    
    // code to enter number
    if (!operator) {
        number1 += num;
        screen.textContent = number1;
    } else {
        number2 += num;
        screen.textContent = number2;
    }
}))

// decimal dot handler
decimal.addEventListener('click', event => {
    const decimalDot = event.target.textContent;
    if (!operator && !(number1.includes('.'))) {
        number1 += decimalDot;
        screen.textContent = number1;
    } else if (!(number2.includes('.'))) {
        number2 += decimalDot;
        screen.textContent = number2;
    }
})

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
    } 
})

// clear handle
clearBtn.addEventListener('click', () => {
    number1 = '';
    number2 = '';
    operator = '';
    result = '';
    screen.textContent = '0';
})

// backspace handler
backspace.addEventListener('click', () => {
    if (!operator) {
        number1 = number1.slice(0, -1)
        screen.textContent = number1;
    } else if (number1 && !number2) {
        operator = '';
        screen.textContent = number1;
    } else {
        number2 = number2.slice(0, -1)
        screen.textContent = number2;
    }

    if (!screen.textContent) {
        screen.textContent = '0';
    }
})