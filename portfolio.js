AOS.init();
$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('.nav').addClass('changeColor')
       }
       if ($(this).scrollTop() < 50) {
          $('.nav').removeClass('changeColor')
       }
    });
 });


 // GLOBALS
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const mobileLinks = document.querySelectorAll('.mobileLink');
const cards = document.querySelectorAll('.card');

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
  if (((document.body.scrollTop > 760) && (document.body.scrollTop < 2000)) || ((document.documentElement.scrollTop > 760) && (document.documentElement.scrollTop < 2000))) {
    document.querySelector(".navbar").style.fontSize = "1rem";
    document.querySelector(".nav").style.background = "black";
    document.querySelector("img").src = "brand2.png";
    let links = document.querySelectorAll(".navLink");
    links.forEach(function(link) {
      link.style.color = "white";
    });
    let socialLinks = document.querySelectorAll("i");
    socialLinks.forEach(function(icon) {
      icon.classList.remove("black");
      icon.classList.add("white");
    });
  } else if (((document.body.scrollTop > 2000) && (document.body.scrollTop < 2900)) || ((document.documentElement.scrollTop > 2100) && (document.documentElement.scrollTop < 2900))) {
    document.querySelector(".navbar").style.fontSize = "1rem";
    document.querySelector(".nav").style.background = "none";
    document.querySelector("img").src = "brand1.png";
    let links = document.querySelectorAll(".navLink");
    links.forEach(function(link) {
      link.style.color = "black";
    });
    let socialLinks = document.querySelectorAll("i");
    socialLinks.forEach(function(icon) {
      icon.classList.add("black");
      icon.classList.remove("white");
    });
  } else {
    document.querySelector(".navbar").style.fontSize = "1.25rem";
    document.querySelector(".nav").style.background = "none";
    document.querySelector("img").src = "brand2.png";
    let links = document.querySelectorAll(".navLink");
    links.forEach(function(link) {
      link.style.color = "white";
    });
    let socialLinks = document.querySelectorAll("i");
    socialLinks.forEach(function(icon) {
      icon.classList.remove("black");
      icon.classList.add("white");
    });
  }
}