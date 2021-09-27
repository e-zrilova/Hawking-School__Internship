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



// (function () {
//   const menuToggle = document.querySelector('.js-menu-toggle')
//   const menuItems = document.querySelectorAll('.js-menu-item')
//   const menuContent = document.querySelector('.js-menu-content')
//   const Social = document.querySelector('.js-header__social')
//   // const hamburgers = document.querySelector('.hamburger')

//   if (menuToggle && Social && menuContent && hamburgers && menuItems.length) {
//     function openMenu() {
//       menuToggle.classList.add('active')
//       menuContent.classList.add('active')
//       Social.classList.add('active')
//       // hamburgers.classList.add('active')
//     }

//     function closeMenu() {
//       menuToggle.classList.remove('active')
//       menuContent.classList.remove('active')
//       Social.classList.remove('active')
//       // hamburgers.classList.remove('active')
//     }

//     function toggleMenu() {
//       if (menuToggle.classList.contains('active')) {
//         closeMenu()
//       } else {
//         openMenu()
//       }
//     }

//     function resizeHandler() {
//       if (window.innerWidth >= 768) {
//         closeMenu()
//       }
//     }
//     menuToggle.addEventListener('click', toggleMenu)
//     // menuItems.forEach(item => {
//     //   item.addEventListener('click', closeMenu)
//     // })
//     window.addEventListener('resize', resizeHandler)
//   }
// }());
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
}());

(function () {
const header = document.querySelector('.header')
const firstSection = document.querySelector('.first-screen')
let headerHeight = firstSection.clientHeight

if (header && headerHeight) {
window.addEventListener('scroll', () => {
  if (window.pageYOffset > headerHeight) {
    header.classList.add('js-header--dark')
  } else {
    header.classList.remove('js-header--dark')
  }
})}
window.addEventListener('resize', () => {
  headerHeight = firstSection.clientHeight
})
}());


(function(){
const defaultSelect = () => {
  const element = document.querySelector('.default')
  console.log(element)
  const choices = new Choices(element, {
    searchEnabled: false,
  })
}
defaultSelect();
}());

(function () {
const titles = document.querySelectorAll('.js-title')
const contents = document.querySelectorAll('.js-content')

if (titles.length && contents.length && (titles.length === contents.length)) {
  function removeActive() {
    titles.forEach((item, index) => {
      item.classList.remove('active')
      contents[index].classList.remove('active')
    })
  }

  titles.forEach((item, index) => {
    item.addEventListener('click', () => {
      removeActive()
      item.classList.add('active')
      contents[index].classList.add('active')
    })
  })
}
}());
(function () {
  // inputMask
  let inputs = document.querySelectorAll('input[type="tel"]')
  let im = new Inputmask('+7 (999) 999-99-99')
  im.mask(inputs)

  let inputsEmail = document.querySelectorAll('input[type="email"]')
  let imE = new Inputmask('{1,20}[.*{1,20}]@*{1,20}.*{2,4}')
  imE.mask(inputsEmail)

  // validate

  function validateForms(selector, rules) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form, values, ajax) {
        console.log(form);

        let formData = new FormData(form);

        fetch("mail.php", {
            method: "POST",
            body: formData
          })
          .then(function (data) {
            console.log(data);
            console.log('Отправлено');
            form.reset();
          });
      }
    });
  }

  validateForms('.leave-a-request__form', {
    email: {
      required: true,
      email: true
    },
    fio: {
      required: true
    },
    tel: {
      required: true
    }
  });

}());