let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = displayValue;
}

function calculateExponentiation() {
    displayValue = Math.pow(eval(displayValue), 2);
    document.getElementById('display').value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1); // Remove the last character
    document.getElementById('display').value = displayValue;
}