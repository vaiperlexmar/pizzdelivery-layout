"use strcit";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const circle = document.querySelector(".header__clip-path"); // clip-path animation of header

function openMenu() {
  if (menu.classList.contains("header__menu_disabled")) {
    hamburger.classList.add("hamburger_open");
    menu.classList.remove("header__menu_disabled");
    menu.classList.add("header__menu_enabled");

    // top-side header animation of color filling
    circle.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";

    // menu appering animation
    menu.classList.remove("slide-top");
    menu.classList.add("slide-bottom");
  } else {
    hamburger.classList.remove("hamburger_open");
    menu.classList.remove("header__menu_enabled");

    setTimeout(() => {
      menu.classList.add("header__menu_disabled");
    }, 500);

    // top-side header animation of color filling
    circle.style.clipPath = "polygon(0 0, 100% 0, 100% 0%, 0 0%)";

    // menu disappering animation
    menu.classList.remove("slide-bottom");
    menu.classList.add("slide-top");
  }
}

hamburger.addEventListener("click", openMenu);
