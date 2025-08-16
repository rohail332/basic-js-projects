const buttons = document.querySelectorAll(".btn");

function showRandomButton() {
  const randomIndex = Math.floor(Math.random() * buttons.length);
  const selectedButton = buttons[randomIndex];
  selectedButton.style.display = "inline-block";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("btn1")) {
      alert("You found the first hidden message");
    } else if (button.classList.contains("btn2")) {
      alert("Learn to code");
    } else if (button.classList.contains("btn3")) {
      alert("Keep it up");
    } else if (button.classList.contains("btn4")) {
      alert("Oh, you found me");
    } else if (button.classList.contains("btn5")) {
      alert("Congrats, you found the hidden message");
    } else if (button.classList.contains("btn6")) {
      alert("Please, don't click me again");
    } else if (button.classList.contains("btn7")) {
      alert("Stop clicking me");
    } else if (button.classList.contains("btn8")) {
      alert("Keep going, you are doing great");
    } else if (button.classList.contains("btn9")) {
      alert("Stop it, you are making me nervous");
    } else if (button.classList.contains("btn10")) {
      alert("Really? You clicked me again?");
    } else if (button.classList.contains("btn11")) {
      alert("Fine, you win");
    } else if (button.classList.contains("btn12")) {
      alert("Congrats, you found the last hidden message");
    }

    button.style.display = "none";
    showRandomButton();
  });
});

showRandomButton();