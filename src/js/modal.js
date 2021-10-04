 const modal = document.querySelector('.js-modal')
 const openBtn = document.querySelector('.js-open-modal')
 const closeBtn = document.querySelector('.js-close-modal')

 if (modal && openBtn && closeBtn) {
   modal.addEventListener('click', (e) => {
     const target = e.target
     if (target === modal || target === closeBtn) {
       modal.classList.remove('active')
       document.body.style.overflow = ''
     }
   })
   openBtn.addEventListener('click', () => {
     modal.classList.add('active')
     document.body.style.overflow = "hidden"
   })

 };