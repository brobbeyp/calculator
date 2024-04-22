const add = (x,y) => {
    return x + y;
};

const subtract = (x,y) => {
    return x - y;
};

const multiply = (x, y) => {
    return x * y;
};

const divide = (x, y) => {
    return x/y;
};

const operate = (x, y, operator) => {
    if (operator === '+') {
        return add(x,y);
    } else if (operator === '-') {
        return subtract(x,y);
    } else if (operator === '*') {
        return multiply(x,y);
    } else if (operator === '/') {
        return divide(x,y);
    };
}

const updateDisplay = (e) => {
    display.textContent += `${e.target.textContent}`;
    updateOperands();
}

const updateDisplayOperator = (e) => {
    display.textContent += ` ${e.target.textContent} `;
    for (let button of operatorButtons) {
        if (button.textContent !== e.target.textContent) {
            button.disabled = true
        };
    
    };
    updateOperands();
}


const updateOperands = () => {
    parseDisplay();

    if (parsed[2] !== '') {
        firstOperand = Number.parseInt(parsed[0]);
        secondOperand = Number.parseInt(parsed[2]);
        console.log(firstOperand);
        console.log(secondOperand);
        
    } else {
        firstOperand = Number.parseInt(parsed[0]);
        console.log(firstOperand);
    };
}


const parseDisplay = () => {
    parsed = display.textContent.split(' ')
}

const clearDisplay = () => {
    display.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    for (let button of operatorButtons) {
            button.disabled = false
        };
    };


const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', updateDisplay));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', updateDisplayOperator))


let parsed = []
let firstOperand = '';
let secondOperand = '';
let operator = '' ;



