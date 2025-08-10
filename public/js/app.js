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


let kazanSwiperRez = new Swiper('.kazan-swipe__rez', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-rezi",
    prevEl: ".swiper-button-prev-rezi",
  },
});
