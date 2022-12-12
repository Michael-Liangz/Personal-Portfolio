// TODO ======================= MENU SHOW Y HIDDEN =======================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// TODO ======================= MENU SHOW =======================
// * Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// TODO ======================= MENU HIDDEN =======================
// * Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// TODO ======================= REMOVE MENU MOBILE =======================
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
// ! list_item -> kumpulan suatu menu atau fitur seperti: Home, About, Skills, Services, Portofolio dan Contact Me
navLink.forEach((list_item) => list_item.addEventListener("click", linkAction));

// TODO ======================= ACCORDION SKILLS =======================

// TODO ======================= QUALIFICATION TABS =======================

// TODO ======================= SERVICES MODAL =======================
