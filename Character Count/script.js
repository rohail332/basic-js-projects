const textarea = document.getElementById("area");
const count = document.querySelector(".count");

textarea.addEventListener("input", () => {
  const len = textarea.value.length;
  count.textContent = len;
});
