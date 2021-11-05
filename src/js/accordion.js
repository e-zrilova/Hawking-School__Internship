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
      item.addEventListener('click', (event) => {
        const isActive = event.currentTarget.classList.contains('active');
        removeActive()

        if (!isActive) {
          item.classList.add('active');
          contents[index].classList.add('active');
        }
      })
    })
  }
})();