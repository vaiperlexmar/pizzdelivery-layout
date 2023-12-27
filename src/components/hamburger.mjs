"use strcit";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const circle = document.querySelector(".header__clip-path"); // clip-path animation of header

function openMenu() {
  if (menu.classList.contains("header__menu_disabled")) {
    hamburger.classList.add("hamburger_open");
    menu.classList.remove("header__menu_disabled");
    menu.classList.add("header__menu_enabled");
    circle.style.clipPath = "circle(200% at 0 0)";
  } else {
    hamburger.classList.remove("hamburger_open");
    menu.classList.remove("header__menu_enabled");
    menu.classList.add("header__menu_disabled");

    circle.style.clipPath = "circle(0% at 0 0)";
  }
}

hamburger.addEventListener("click", openMenu);
