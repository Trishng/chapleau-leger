import './style.scss';
import './_biographie.scss';
import './_contact.scss';

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

function menu() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}