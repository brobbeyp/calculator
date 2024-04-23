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
    if (y === 0) {
        display.textContent = 'No dividing by zero!';
    } else {
        return x/y;
    }
    
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
    if (isResultProper === false) {
        clearDisplay();
        isResultProper = true;
    };
    if (!resultCalculated) {
    display.textContent += `${e.target.textContent}`;
    } else {
            display.textContent = `${e.target.textContent}`;
            resultCalculated = false;
            updateOperands();
    };
    updateOperands();

    if (e.target.id === 'decimal') {
        if (parsed.length === 1) {
            if (parsed[0].includes('.')) {
                decimalButton.removeEventListener('click', updateDisplay)
            }
        } else if (parsed.length > 1) {
            if (parsed[2].includes('.')) {
                decimalButton.removeEventListener('click', updateDisplay)
            }
        }
    }
    
}

const updateDisplayOperator = (e) => {
    parseDisplay();
    decimalButton.disabled = false;

    if (parsed[2] != '') {
        compute()
    }
    resultCalculated = false;
    display.textContent += ` ${e.target.textContent} `;
    updateOperands();
    if (parsed[2] != '') {
        compute();
        display.textContent += ` ${e.target.textContent} `;
    }
    decimalButton.addEventListener('click', updateDisplay)
};

const updateOperands = () => {
    parseDisplay();

    if (parsed[2] !== '') {
        firstOperand = Number.parseInt(parsed[0]);
        secondOperand = Number.parseInt(parsed[2]);
        
    } else {
        firstOperand = Number.parseInt(parsed[0]);
    };
}

const enableButtons = () => {
    for (let button of operatorButtons) {
            button.disabled = false
        };
};

const disableButtons = () => {
    for (let button of operatorButtons) {
            button.disabled = true
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
    parsed  = []
    for (let button of operatorButtons) {
            button.disabled = false
        };
};


const displayResult = () => {
    console.log('displaying')
    convertOperands();

    if (parsed[1] === '+') {
        display.textContent =  add(parsed[0], parsed[2])
    } else if (parsed[1] === '-') {
        display.textContent = subtract(parsed[0], parsed[2])
    } else if (parsed[1] === '*') {
        display.textContent =  multiply(parsed[0], parsed[2])
    } else if (parsed[1] === '/') {
        display.textContent = divide(parsed[0], parsed[2])
    };

    parsed[0] = display.textContent;
    parsed[2] = '';

    display.textContent = truncateDecimals(display.textContent)
    firstOperand = display.textContent;
    secondOperand = '';
    enableButtons();
    resultCalculated = true;

}

const compute = () => {
    // This case should set parsed[2] to parsed[0] and then compute as normal
    // maybe remove last else statement to new function and name this errorCheck
    // it will run if statements to check how to compute


    if (parsed[0] !== '' && parsed[2] == '') {
        let operator = parsed[1]
        parsed[2] = parsed[0];
        displayResult();
        parsed[1] = operator;

    } else if (parsed[1] === '/' && parsed[2] === '0') {
        display.textContent = 'No dividing by zero!';
        parsed = [];
        isResultProper = false;

    } else if (parsed.length > 3){
        display.textContent = 'Please input a proper equation!';
        parsed = [];
        isResultProper = false;
    } else {
        displayResult();
    };

}

const truncateDecimals = (float) => {
    if (float % 1 != 0) {
        return Number(float).toFixed(5)
    } 
    return float
}

const convertOperands = () => {
    parsed[0] = Number.parseFloat(parsed[0]);
    parsed[2] = Number.parseFloat(parsed[2]);
}


const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', updateDisplay));

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay);

operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', updateDisplayOperator))

equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', compute)

const decimalButton = document.querySelector('#decimal')


let parsed = []
let firstOperand = '';
let secondOperand = '';
let operator = '' ;
let resultCalculated = false
let isResultProper = true


