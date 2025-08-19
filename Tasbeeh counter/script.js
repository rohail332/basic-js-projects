const sub = document.querySelector(".inc");
const reset = document.querySelector(".reset");
const output = document.querySelector(".count");

let screen = 0;

sub.addEventListener("click", () => {
  screen++;
  updateDisplay();
});
reset.addEventListener("click", () => {
  screen = 0;
  updateDisplay();
});

function updateDisplay() {
  output.textContent = screen;
}
