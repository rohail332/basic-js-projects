const tc = document.querySelector("h1");
const colors = document.querySelectorAll(".btn");

colors.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("green")) {
      document.body.style.backgroundColor = "rgb(10, 156, 10)";
      tc.style.color = "white";
    } else if (btn.classList.contains("red")) {
      document.body.style.backgroundColor = "rgb(221, 19, 19)";
      tc.style.color = "white";
    } else if (btn.classList.contains("blue")) {
      document.body.style.backgroundColor = "rgb(0, 0, 255)";
      tc.style.color = "white";
    } else if (btn.classList.contains("yellow")) {
      document.body.style.backgroundColor = "rgb(255, 255, 0)";
      tc.style.color = "black";
    } else if (btn.classList.contains("pink")) {
      document.body.style.backgroundColor = "rgb(255, 94, 121)";
      tc.style.color = "white";
    } else if (btn.classList.contains("gray")) {
      document.body.style.backgroundColor = "rgb(161, 161, 161)";
      tc.style.color = "black";
    }
  });
});
