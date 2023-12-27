"use strcit";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const topNavHeader = document.querySelector(".header__topnav");

function openMenu() {
  if (menu.classList.contains("header__menu_disabled")) {
    hamburger.classList.add("hamburger_open");
    menu.classList.remove("header__menu_disabled");
    menu.classList.add("header__menu_enabled");
    topNavHeader.style.backgroundColor = "#f7d22d";
  } else {
    hamburger.classList.remove("hamburger_open");
    menu.classList.remove("header__menu_enabled");
    menu.classList.add("header__menu_disabled");
    topNavHeader.style.backgroundColor = "#fff";
  }
}

hamburger.addEventListener("click", openMenu);
