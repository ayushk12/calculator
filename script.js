var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var evaluated = false;

function evaluate(value) {
    if (Number.isInteger(+value)) {
        display.textContent = "";
    }
    evaluated = false;
}

function eventHandler(value) {
    if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "%" ||
        Number.isInteger(+value) ||
        value === "."
    ) {
        display.textContent += value;
    }
    if (value === "=" || value === "Enter") {
        display.textContent = eval(display.textContent);
        evaluated = true;
    }
    if (value === "^") {
        display.textContent += '**';
    }
    if (value === "Backspace") {
        display.textContent = display.textContent.slice(0, -1);
    }

    if (value === "AC") {
        evaluate = false;
        display.textContent = "";
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var value = this.getAttribute("data-value");
        if (evaluated) {
            evaluate(value);
        }
        eventHandler(value);
    });
}

document.addEventListener("keydown", function (event) {
    var value = event.key;
    console.log(value);
    if (evaluated) {
        evaluate(value);
    }
    eventHandler(value);
});
