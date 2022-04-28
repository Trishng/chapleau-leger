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

let menu = document.getElementById("menu");

menu.addEventListener('click', () => {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
});

let bioHover = document.querySelector('.biographie');
let bios = document.querySelector('.bios');

bioHover.addEventListener('mouseover', () => {
  console.log(bios);
  if (bios.className === "bios") {
    bios.className += " hover";
  } else {
    bios.className = "bios";
  }
})