import Swiper from 'swiper';
import 'swiper/css';

export const useGallerySlider = () => {
  return new Swiper('.gallery__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
  });
};
