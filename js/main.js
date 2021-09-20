const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('visible');
  menuToggle.classList.toggle('is-open');
})

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header--dark')
  } else {
    header.classList.remove('header--dark')
  }
})