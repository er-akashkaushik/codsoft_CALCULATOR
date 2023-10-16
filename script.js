let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById("display").value = displayValue;
}

function calculateExponentiation() {
    displayValue = Math.pow(eval(displayValue), 2);
    document.getElementById("display").value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}

function evaluateFunction() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") {
        appendToDisplay(event.key);
    } else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {
        appendToDisplay(event.key);
    } else if (event.key === ".") {
        appendToDisplay(event.key);
    } else if (event.key === "Enter") {
        evaluateFunction();
    } else if (event.key === "Escape") {
        clearDisplay();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "^") {
        appendToDisplay("**");
    } else if (event.key === "t") {
        appendToDisplay("tan(");
    } else if (event.key === "l") {
        appendToDisplay("log(");
    } else if (event.key === "s") {
        appendToDisplay("sin(");
    } else if (event.key === "c") {
        appendToDisplay("cos(");
    } else if (event.key === "p") {
        appendToDisplay("Math.PI");
    } else if (event.key === "e") {
        appendToDisplay("Math.E");
    } else if (event.key === "(") {
        appendToDisplay("(");
    } else if (event.key === ")") {
        appendToDisplay(")");
    }
});
