import Swiper from 'swiper';
import 'swiper/css';

export const useGallerySlider = () => {
  return new Swiper('.gallery__slider', {
    slidesPerView: 'auto',

    spaceBetween: 16,
    breakpoints: {
      577: {
        spaceBetween: 32,
      },
    },
    grabCursor: true,
    watchOverflow: true,
  });
};

export const useTeamSlider = () => {
  return new Swiper('.team__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
      577: {
        spaceBetween: 32,
      },
    },
    grabCursor: true,
    watchOverflow: true,
  });
};
