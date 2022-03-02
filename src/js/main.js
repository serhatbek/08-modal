if (module.hot) {
  module.hot.accept();
}

const openModalBtn = document.querySelector('.cta__btn');
const closeModalBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
