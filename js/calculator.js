const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      // Evaluate expression
      display.value = eval(display.value);
    } else if (button.textContent === 'C' || button.textContent === 'c') {
      // Clear display
      display.value = '';
    } else {
      // Append button value to display
      display.value += button.textContent;
    }
  });
});

const display2 = document.querySelector('.display2');
const buttons2 = document.querySelectorAll('.button2');

let operand1 = '';
let operand2 = '';
let operator = '';

function handleButtonClick(buttonValue) {
    if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        // Store first operand and operator
        operand1 = display2.value;
        operator = buttonValue;
        display2.value = '';
    }else if (buttonValue === '=') {
        // Store second operand and perform calculation
        operand2 = display2.value;
        let result;
        switch (operator) {
        case '+':
            result = Number(operand1) + Number(operand2);
            break;
        case '-':
            result = Number(operand1) - Number(operand2);
            break;
        case '*':
            result = Number(operand1) * Number(operand2);
            break
        case '/':
            result = Number(operand1) / Number(operand2);
            break;
        default:
            break;
        }
        // Display result
        display2.value = result;
        operand1 = '';
        operand2 = '';
        operator = '';
    }else if (buttonValue === 'C') {
        // Clear calculator
        display2.value = '';
        operand1 = '';
        operand2 = '';
        operator = '';
    } else {
        // Append digit or decimal point to display
        display2.value += buttonValue;
    }


}

    // Add event listeners to calculator buttons
buttons2.forEach((button) => {
    button.addEventListener('click', () => {
    handleButtonClick(button.getAttribute('data-value'));
    });
});

