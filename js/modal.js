const modal = document.querySelector('.backdrop');
const modalBtnClose = document.querySelector('.modal-btn-close');
const modalBtnOpen = document.querySelector('.modal-btn-open');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
