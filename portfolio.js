$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('.navbar').addClass('changeColor')
       }
       if ($(this).scrollTop() < 50) {
          $('.navbar').removeClass('changeColor')
       }
    });
 });