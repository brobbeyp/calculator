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

let firstOperand = 0;
let secondOperand = 0;
let operator = '' ;
let result = 0


