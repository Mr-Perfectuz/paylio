$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* niceSelect */
    $("select").niceSelect();

   /* Magnific Popup */
  $('.popupvideo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
  });

  // payment-carousel
  $('.payment-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-a-left-double\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-b-right-double\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  // market-carousel
  $('.market-carousel').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-c-left-single\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-d-right-single\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
  });

  // testimonials-carousel
  $('.testimonials-carousel-two').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-double-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-double-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  // testimonials-carousel-index4
  $('.testimonials-carousel-index4').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-double-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-double-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  // banner-carousel-index6
  $('.banner-carousel-index6').slick({
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-double-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-double-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  // testimonials-carousel
  $('.testimonials-carousel').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    prevArrow: "<button type='button' class='slick-prev pull-left btn-icon'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right btn-icon'></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    }
  });

  // Countdown
  $('[data-countdown]').each(function () {
      var $this = $(this),
      finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
      $this.html(event.strftime('<H1> %D </H1> <H1> %H </H1> <H1> %M </H1> <H1> %S </H1>'));
    });
  });

  /* Wow js */
  new WOW().init();

  });
});