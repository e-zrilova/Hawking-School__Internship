(function () {
  const menuToggle = document.querySelector('.js-menu-toggle')
  const menuContent = document.querySelector('.js-header__wrapper-navigation')
  console.log(menuContent);

  if (menuToggle && menuContent) {
    function openMenu() {
      menuToggle.classList.add('active')
      menuContent.classList.add('active')
    }

    function closeMenu() {
      menuToggle.classList.remove('active')
      menuContent.classList.remove('active')
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
})();