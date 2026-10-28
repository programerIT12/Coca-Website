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
