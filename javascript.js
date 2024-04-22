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
}

const updateDisplayOperator = (e) => {
    display.textContent += ` ${e.target.textContent} `;
    for (let button of operatorButtons) {
        console.log(button.textContent);
        if (button.textContent !== e.target.textContent) {
            button.disabled = true
        };
    }
}

const clearDisplay = () => {
    display.textContent = '';
}

const display = document.querySelector('#display');
let result = display.textContent;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', updateDisplay));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', updateDisplayOperator))



let firstOperand = 0;
let secondOperand = 0;
let operator = '' ;



