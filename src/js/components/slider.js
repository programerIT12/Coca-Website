import Swiper from 'swiper';
import 'swiper/css';

export const useInsightSlider = () => {
  return new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
