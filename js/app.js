$(function () {
  "use strict";

  $(".banner_slider").slick({
    arrows: false,
    fade: true,
    speed: 800,
    autoplay: true,
    dots: true,
    dotsClass: "banner_slider_dots",
  });

  $(".product_slider").slick({
    arrows: false,
    speed: 800,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0px',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})




