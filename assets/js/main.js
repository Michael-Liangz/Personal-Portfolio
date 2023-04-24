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
// ! clickSkillsName -> kumpulan skill, seperti: Frontend developer, Backend developer dan Designer
skillsHeader.forEach((clickSkillsName) => {
  clickSkillsName.addEventListener("click", toggleSkills);
});

// TODO ======================= QUALIFICATION TABS =======================
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

// ! tabIcon -> kumpulan qualification berupa penamaan suatu icon, pada: Education dan Work
tabs.forEach((tabIcon) => {
  tabIcon.addEventListener("click", () => {
    const target = document.querySelector(tabIcon.dataset.target);

    tabContents.forEach((tabContentIcon) => {
      tabContentIcon.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach((tabIcon) => {
      tabIcon.classList.remove("qualification_active");
    });
    tabIcon.classList.add("qualification_active");
  });
});

// TODO ======================= SERVICES MODAL =======================
const modalViews = document.querySelectorAll(".services_modal"),
  modalButtons = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalButtons.forEach((modalClickViewMore, i) => {
  modalClickViewMore.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloseButton) => {
  modalCloseButton.addEventListener("click", () => {
    modalViews.forEach((modalViewMore) => {
      modalViewMore.classList.remove("active-modal");
    });
  });
});

// TODO ======================= PORTFOLIO SWIPER =======================
let swiperPortfolio = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

// TODO ======================= TESTIMONIAL =======================
let swiperTestimonial = new Swiper(".testimonial_container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// TODO ======================= SCROLL SECTIONS ACRTIVE LINK =======================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// TODO ======================= CHANGE BACKGROUND HEADER =======================
function scrollHeader() {
  const nav = document.getElementById("header");
  // * When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

// TODO ======================= SHOW SCROLL UP =======================
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // * When the scroll is higer than 560 viewport height, add the show-scroll class to the a tag with the scroll class to the a tag with the scroll-up class
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// TODO ======================= DARK LIGHT THEME =======================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// * Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// * We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// * We validate if the user previously chose a topic
if (selectedTheme) {
  // * If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// * Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // * Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // * We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// TODO ======================= EMAIL JS =======================
function validate() {
  let name = document.querySelector(".user_name");
  let email = document.querySelector(".user_email");
  let msg = document.querySelector(".user_message");
  let sendBtn = document.querySelector(".user_sendButton");

  sendBtn.addEventListener("click", (send) => {
    send.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      empryError();
    } else {
      sendMail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendMail(name, email, msg) {
  emailjs.send("service_97kvymr", "template_kdvjhsh", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function empryError() {
  swal({
    title: "Error!",
    text: "Fields cannot be empty!",
    icon: "error",
    button: "OK",
  });
}

function success() {
  swal({
    title: "Your Message sent successfully",
    text: "We try to reply in 24 Hours",
    icon: "success",
    button: "OK",
  });
}
