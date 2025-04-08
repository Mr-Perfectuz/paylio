$(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // Accordion Style
    $(".accordion-item").click(function () {
      if ($(".intro")[0]) {
        $(".accordion-item").removeClass("intro");
      }
      $(this).toggleClass("intro");
    });

    // Scroll Top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // Navbar Dropdown
    var dropdown_menu = $(".header-section .dropdown-menu");
    $(window).resize(function () {
      if ($(window).width() < 992) {
        dropdown_menu.removeClass('show');
      }
      else {
        dropdown_menu.addClass('show');
      }
    });
    if ($(window).width() < 992) {
      dropdown_menu.removeClass('show');
    }
    else {
      dropdown_menu.addClass('show');
    }

    // Sticky Header
    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // Password Show Hide
    $('.showPass').on('click', function(){
        var passInput=$(".passInput");
        if(passInput.attr('type')==='password'){
          passInput.attr('type','text');
        }else{
          passInput.attr('type','password');
        }
    })
  });
});