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
    screen.textContent = event.target.textContent;
}


function calculate() {
    let number1;
    let number2;
    let operator;
// IF !number1, GET Input for it
    //display the number while it being inputted
    // store it in number1
    if (!number1) {
        number.forEach(button => button.addEventListener('click', () => displayNumber(event)))
        number1Value = screen.textContent;
        number1 = number1Value;
    } else if (number1 && !operator) {
// IF number1 exist and operator not exist
    // Get input for operator
    // display it 
    // store it into operator

    }

// If number1 exist, operator exist, GET input for number2
    // display it while being inputted
    // store it in number2
// IF number1, parameter, and number2 exist
    // execute the operations
}

// IF !number1, GET Input for it
    //display the number while it being inputted
    // store it in number1
// IF number1 exist and operator not exist
    // Get input for operator
    // display it 
    // store it into operator
// If number1 exist, operator exist, GET input for number2
    // display it while being inputted
    // store it in number2
// IF number1, parameter, and number2 exist
    // execute the operations

calculate();