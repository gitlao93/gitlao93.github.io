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
