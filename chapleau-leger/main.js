setTimeout(() => {
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: "auto",
      spaceBetween: 40,
      speed: 1000,
      mousewheel: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

    });
},1000);
//quand tous les images se charge, executer, a changer

let menu = document.getElementById("menu");
let icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
  if (menu.className === "menu") {
    menu.className += " responsive";
  } else {
    menu.className = "menu";
  }
});

let bioHover = document.querySelector('.biographie');
let bios = document.querySelector('.bios');

bioHover.addEventListener('click', () => {
  console.log(bios);
  if (bios.className === "bios") {
    bios.className += " hover";
    oeuvres.className = "oeuvres";
  } else {
    bios.className = "bios";
  }
});

let oeuvresHover = document.querySelector('.oeuvres-menu');
let oeuvres = document.querySelector('.oeuvres');

oeuvresHover.addEventListener('click', () => {
  console.log(bios);
  if (oeuvres.className === "oeuvres") {
    oeuvres.className += " hover";
    bios.className = "bios";
  } else {
    oeuvres.className = "oeuvres";
  }
});