import Inputmask from "inputmask";
import Choices from 'choices.js';
import Swiper, {
  Navigation,
  Pagination,
  Keyboard
} from 'swiper';
import {
  createForm
} from './modules/form';
import {
  initModal
} from './modules/modal';

let inputs = document.querySelectorAll('input[type="tel"]')
let im = new Inputmask('+7 (999) 999-99-99')
im.mask(inputs)

Swiper.use([Navigation, Pagination, Keyboard]);

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

const defaultSelect = () => {
  const element = document.querySelector('.default')
  const choices = new Choices(element, {
    searchEnabled: false,
  })
}
defaultSelect();

const closeModal = initModal()

const form = document.querySelector('.js-form')
createForm(form);
const modalForm = document.querySelector('.js-modal-form');
createForm(modalForm, closeModal);