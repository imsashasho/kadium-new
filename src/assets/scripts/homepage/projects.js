import { paralax } from '../common/paralax';

const swiper = new Swiper('.projects-swiper', {
  grabCursor: true,
  loop: true,
  keyboard: true,
  spaceBetween: 20,
  initialSlide: 1,
  preloadImages: false,
  lazy: true,
  watchSlidesVisibility: true,
  speed: 1600,

  breakpoints: {
    1400: {
      spaceBetween: 20,
      // autoHeight: true,
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
    },
    768: {
      spaceBetween: 50,
      initialSlide: 1,
      autoHeight: true,
      slidesPerView: 2,
      centeredSlides: false,
    },
    360: {
      spaceBetween: 15,
      slidesPerView: 1.25,
      autoHeight: true,
      centeredSlides: false,
    },
  },
  simulateTouch: true,
  navigation: {
    nextEl: document.querySelector('.projects-swiper-button-next'),
    prevEl: document.querySelector('.projects-swiper-button-prev'),
  },
  //   pagination: {
  //     el: '.news-slider__pagination',
  //     clickable: true,
  //     type: 'progressbar',
  //   },
});

// paralax('[img-paralax]', '', 20);
