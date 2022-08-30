// NAVBAR MENU OPEN/CLOSE

const menuOpen = document.querySelector(".menu-button");
const menuClose = document.querySelector(".close-button");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
  nav.classList.add("nav-active");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("nav-active");
});

// Changing buttons, descriptions and images

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target.closest("a");

  if (!target) return;

  id = target.dataset.id;
  const photoText = document.querySelectorAll(`.${id}`);

  document
    .querySelectorAll(".buttons a")
    .forEach((el) => el.classList.remove("btn-active"));

  target.classList.add("btn-active");

  document
    .querySelectorAll(".about img")
    .forEach((el) => el.classList.remove("active"));

  document
    .querySelectorAll(".info p")
    .forEach((el) => el.classList.remove("active"));

  photoText.forEach((el) => el.classList.add("active"));
});
