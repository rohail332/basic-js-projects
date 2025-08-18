const output = document.querySelector(".out");
const pl = document.querySelector(".inc");
const sub = document.querySelector(".dec");
const reset = document.querySelector(".res");

let screen = 0;

pl.addEventListener("click", () => {
  screen++;
  updateDisplay();
});
sub.addEventListener("click", () => {
  screen--;
  updateDisplay();
});
reset.addEventListener("click", () => {
  screen = 0;
  updateDisplay();
});

function updateDisplay() {
  output.textContent = screen;
}
