 export const initModal = () => {
   const modal = document.querySelector('.js-modal')
   const openBtn = document.querySelector('.js-open-modal')
   const closeBtn = document.querySelector('.js-close-modal')

   const closeModal = () => {
     modal.classList.remove('active')
     document.body.style.overflow = ''
   }


   if (modal && openBtn && closeBtn) {
     modal.addEventListener('click', (e) => {
       const target = e.target
       if (target === modal || target === closeBtn) {
         closeModal()
       }
     })
     openBtn.addEventListener('click', () => {
       modal.classList.add('active')
       document.body.style.overflow = "hidden"
     })

   };
   return closeModal;
 }