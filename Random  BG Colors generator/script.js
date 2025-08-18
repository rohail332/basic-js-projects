const xy = document.getElementById("but");
xy.addEventListener("click", () => {
  const Random = getColor();
  document.body.style.backgroundColor = Random;
});

function getColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
