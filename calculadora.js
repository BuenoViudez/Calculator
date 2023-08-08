const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const fundo = document.querySelector(".container");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  fundo.classList.removeAttribute("id");
  isDark = !isDark;
};

let contador = 0;

themeToggleBtn.addEventListener("click", () => {
  contador++
  console.log(contador);
  if (contador % 2 !== 0) {
    fundo.style.backgroundImage = "linear-gradient(to bottom right, rgb(174, 249, 232), rgb(255, 208, 251))"
  } else {
    fundo.style.backgroundImage = "linear-gradient(to bottom right, rgb(27, 47, 56),rgb(46, 31, 57))"
  }
  console.log(fundo.style.backgroundImage);
})