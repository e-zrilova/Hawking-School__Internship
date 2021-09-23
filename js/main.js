const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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



(function () {
  const menuToggle = document.querySelector('.js-menu-toggle')
  const menuItems = document.querySelectorAll('.js-menu-item')
  const menuContent = document.querySelector('.js-menu-content')
  const Social = document.querySelector('.js-header__social')
  const hamburgers = document.querySelector('.hamburger')

  if (menuToggle && Social && menuContent && hamburgers && menuItems.length) {
    function openMenu() {
      menuToggle.classList.add('active')
      menuContent.classList.add('active')
      Social.classList.add('active')
      hamburgers.classList.add('active')
    }

    function closeMenu() {
      menuToggle.classList.remove('active')
      menuContent.classList.remove('active')
      Social.classList.remove('active')
      hamburgers.classList.remove('active')
    }

    function toggleMenu() {
      if (menuToggle.classList.contains('active')) {
        closeMenu()
      } else {
        openMenu()
      }
    }

    function resizeHandler() {
      if (window.innerWidth >= 768) {
        closeMenu()
      }
    }
    menuToggle.addEventListener('click', toggleMenu)
    // menuItems.forEach(item => {
    //   item.addEventListener('click', closeMenu)
    // })
    window.addEventListener('resize', resizeHandler)
  }
}());

(function () {
const header = document.querySelector('.header')
const headerHeight = document.querySelector('.first-screen').clientHeight

if (header && headerHeight) {
window.addEventListener('scroll', () => {
  if (window.pageYOffset > headerHeight) {
    header.classList.add('js-header--dark')
  } else {
    header.classList.remove('js-header--dark')
  }
})}
}());
