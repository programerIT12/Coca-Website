import Swiper from 'swiper';
import 'swiper/css';

export const useGallerySlider = () => {
  return new Swiper('.gallery__slider', {
    slidesPerView: 'auto', // ширину слайдов задаёт CSS
    // отступ между слайдами: 16px на телефоне, 32px от 577px и шире
    // (если меняешь, поменяй и right у .gallery__btn — это половина отступа)
    spaceBetween: 16,
    breakpoints: {
      577: {
        spaceBetween: 32,
      },
    },
    grabCursor: true,
    watchOverflow: true, // если все слайды влезли, слайдер не дёргается
  });
};

export const useTeamSlider = () => {
  return new Swiper('.team__slider', {
    slidesPerView: 'auto', // ширину карточек задаёт CSS
    spaceBetween: 16, // на телефоне
    breakpoints: {
      577: {
        spaceBetween: 32, // на макете между карточками 32px
      },
    },
    grabCursor: true,
    watchOverflow: true, // если все карточки влезли, слайдер не дёргается
  });
};
