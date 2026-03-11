const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    721: {
      slidesPerView: 3,
    },

    481: {
      slidesPerView: 2,
    },
  },

  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
