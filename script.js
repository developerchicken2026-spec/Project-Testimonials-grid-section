const btn = document.querySelector("#theme-toggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    btn.innerText = "Light Mode";
  } else {
    btn.innerText = "Dark Mode";
  }
});
