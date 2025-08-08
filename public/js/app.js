let swiper = new Swiper(".kazan-swipe__hero", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, 
    // disableOnInteraction: false,
  },
  breakpoints: {
    640: { 
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    }
  },
});
