const body = document.querySelector("body");
const dayIcon = document.querySelector(".day");
const nightIcon = document.querySelector(".night");

dayIcon.addEventListener("click", () => {
  nightIcon.style.display = "block";
  dayIcon.style.display = "none";
  body.classList.add("darkmode");
});

nightIcon.addEventListener("click", () => {
  nightIcon.style.display = "none";
  dayIcon.style.display = "block";
  body.classList.remove("darkmode");
});
