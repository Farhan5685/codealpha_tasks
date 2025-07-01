const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let input = "";

buttons.forEach(button => {
  const value = button.dataset.value;
  if (value) {
    button.addEventListener("click", () => {
      input += value;
      display.value = input;
    });
  }
});

equals.addEventListener("click", () => {
  try {
    input = eval(input).toString();
    display.value = input;
  } catch {
    display.value = "Error";
    input = "";
  }
});

clear.addEventListener("click", () => {
  input = "";
  display.value = "";
});
