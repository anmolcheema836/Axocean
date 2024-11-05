// Preloader script
window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.style.display = "none";
});

// Floating form toggle
const formInputs = document.querySelectorAll(".floating-contact-form .form-input");
const contactIcon = document.querySelector(".floating-contact-form .contact-icon");
const formContainer = document.querySelector(".floating-contact-form .form-container");

contactIcon.addEventListener("click", () => {
  formContainer.classList.toggle("active");
});

// Close floating contact form when clicking outside
window.addEventListener("click", (e) => {
  if (!formContainer.classList.contains("active")) return;
  if (e.target.closest(".floating-contact-form")) return;
  formContainer.classList.remove("active");
});

// Label animation for input focus/blur
formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.previousElementSibling.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.previousElementSibling.classList.remove("active");
    }
  });
});

// Scroll to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Navbar blur effect on scroll
window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.backdropFilter = "blur(50px)";
  } else {
    document.getElementById("navbar").style.backdropFilter = "blur(0px)";
  }
};

// Mobile toggle menu
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("emptyarea").classList.toggle("blur-class");

  // Toggle burger animation
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Close mobile menu by clicking on a menu item
function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("emptyarea").classList.remove("blur-class");

  // Reset burger animation
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Close mobile menu by clicking outside of it
const emptyArea = document.getElementById("emptyarea");
emptyArea.addEventListener('click', hidetogglemenu);

function hidetogglemenu() {
  document.body.classList.remove("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("emptyarea").classList.remove("blur-class");

  // Reset burger animation
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

