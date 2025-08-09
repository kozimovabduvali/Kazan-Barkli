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


let kazanSwiperMain = new Swiper('.kazan-swipe__main', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  // loop: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      this.slideToLoop(1, 0);
    },
  },
});
