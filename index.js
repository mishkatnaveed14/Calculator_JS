let second_number = "";
let first_number = "";
let operator = "";
let Display = false;

let number_btns = document.querySelectorAll(".number_btn");
let operator_btn = document.querySelectorAll(".operator_btn");

let equals_btn = document.getElementById("equals");
let display_btn = document.querySelector(".display");

let clear_btn = document.getElementById("clear");
let backspace_btn = document.getElementById("backspace");

function clearActiveOperators() {
  operator_btn.forEach(btn => {
    btn.style.border = "none";
    btn.style.opacity = "1";
  });
}
function inputNumber(value) {
  if (value === "." && display_btn.textContent.includes(".")) return;

  if (display_btn.textContent === "0" || shouldResetDisplay) {
    display_btn.textContent = value === "." ? "0." : value;
    shouldResetDisplay = false;
  } else {
    display_btn.textContent += value;
  }
  clearActiveOperators(); 
}
// number btn 
number_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;
    if (!Display) {
      display_btn.textContent = value;
      Display = true;
    } else {
      display_btn.textContent += value;
    }
  });
});
// operator btn
operator_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const operators_btn = btn.textContent;
    first_number = display_btn.textContent;
    operator = operators_btn;
    display_btn.textContent = "";
    Display = false;
  });
});
function handlePercent() {
  display_btn.textContent = (Number(display_btn.textContent) / 100).toString();
}
// equals btn
equals_btn.addEventListener("click", () => {
  second_number = display_btn.textContent;
  let result;
  if (operator === "+") {
    result = Number(first_number) + Number(second_number);
  } else if (operator === "-") {
    result = Number(first_number) - Number(second_number);
  } else if (operator === "x") {
    result = Number(first_number) * Number(second_number);
  } else if (operator === "÷") {
    result = Number(first_number) / Number(second_number);
  }
  display_btn.textContent = result;
});
// clear btn
clear_btn.addEventListener("click", () => {
  display_btn.textContent = "";
  first_number = "";
  second_number = "";
  operator = "";
  Display = false;
});
// backspace btn
backspace_btn.addEventListener("click", () => {
  display_btn.textContent = display_btn.textContent.slice(0, -1);
  if (display_btn.textContent === "") {
    display_btn.textContent = "0";
  }
}); 
