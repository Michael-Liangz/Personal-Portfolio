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
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open";
  }
}
// ! ClickSkillsName -> kumpulan skill, seperti: Frontend developer, Backend developer dan Designer
skillsHeader.forEach((ClickSkillsName) => {
  ClickSkillsName.addEventListener("click", toggleSkills);
});

// TODO ======================= QUALIFICATION TABS =======================

// TODO ======================= SERVICES MODAL =======================

// TODO ======================= PORTFOLIO SWIPER =======================

// TODO ======================= SERVICES MODAL =======================

// TODO ======================= TESTIMONIAL =======================

// TODO ======================= SCROLL SECTIONS ACRTIVE LINK =======================

// TODO ======================= CHANGE BACKGROUND HEADER =======================
