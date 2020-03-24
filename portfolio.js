AOS.init();


 // GLOBALS
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const mobileLinks = document.querySelectorAll('.mobileLink');
const cards = document.querySelectorAll('.card');
const image = document.querySelector("img");
const nav = document.querySelector(".nav");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navLink");
const socialLinks = document.querySelectorAll("i");

// HELPER FUNCS
const expandMenu = () => {
    // take the mobile nav menu and reveal it on a hamburger click
    navMobile.classList.toggle('revealNavMobile');
}


// Burger animation
const hamburgerClick = (x) => {
    x.classList.toggle('change');
}

// Expand Mobile Menu
hamburger.addEventListener('click', function() {
    expandMenu();
});

// Expand cards
cards.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('move');
    });
});


// Scroll Navbar Animation
window.onscroll = function() {
    if (!window.matchMedia('(max-width: 800px)').matches) {
      scrollFunction()
    }
};
function scrollFunction() {
  if (((document.body.scrollTop > 2100) && (document.body.scrollTop < 2900)) || ((document.documentElement.scrollTop > 2100) && (document.documentElement.scrollTop < 2900))) {
    navbar.style.fontSize = "1rem";
    nav.style.background = "none";
    nav.classList.remove("box-shadow");
    image.src = "brand1.png";
    links.forEach(function(link) {
      link.style.color = "black";
    });
    socialLinks.forEach(function(icon) {
      icon.classList.add("black");
      icon.classList.remove("white");
    });
  } else {
    navbar.style.fontSize = "1rem";
    nav.style.background = "black";
    nav.classList.add("box-shadow");
    image.src = "brand2.png";
    links.forEach(function(link) {
      link.style.color = "white";
    });
    socialLinks.forEach(function(icon) {
      icon.classList.remove("black");
      icon.classList.add("white");
    });
  }
}