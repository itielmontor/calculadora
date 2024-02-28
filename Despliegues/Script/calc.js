let expression = '';

function appendNumber(number) {
    expression += number;
    document.getElementById('display').value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquare() {
    try {
        const result = Math.pow(eval(expression), 2);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePower() {
    try {
        const result = eval(expression.replace("^", "**"));
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendNumber(parseInt(key));
    } else if (key === '.') {
        appendOperator('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter') {
        calculate();
    }
});
