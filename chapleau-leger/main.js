import './style.scss';
import './_biographie.scss';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    speed: 1000,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

  });

  const menuHamburger = document.querySelector('.icon');

  menuHamburger.addEventListener('click', () => {
    console.log('true');
  })
