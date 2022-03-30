import './style.sass'

import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation]);


// бургер меню
const burgerMenu = document.querySelector('.burger-menu__btn');
const menu = document.querySelector('.menu');

// всплывающее окно с информацией о животном
const btnOpenAnimalCard = document.querySelectorAll('.friends-slide__button');
const popUpAnimalCard = document.querySelector('.animal-card');
const btnCloseAnimalCard = document.querySelector('.animal-card__btn-close');




//  всплывающее окно с информацией о животном
btnOpenAnimalCard.forEach(element => {
  element.addEventListener('click', function() {
    addClassNameActive(popUpAnimalCard);
  })
});

btnCloseAnimalCard.addEventListener('click', () => addClassNameActive(popUpAnimalCard));

document.body.addEventListener('click', (e) => console.log(e.target))


// бургер меню
burgerMenu.addEventListener('click', function () {
  addClassNameActive(burgerMenu);
  addClassNameActive.call(menu, menu);
});





















// ================================ functions ========================================
export function addClassNameActive(element) {
  element.classList.toggle('active');
}






// =============================== swiper slider =======================================
const swiper = new Swiper('.friends-slider', {
  direction: 'horizontal',
  navigation: {
    nextEl: '.friends-slider__btn-next',
    prevEl: '.friends-slider__btn-prev',
  },

  slidesPerView: 3,
  spaceBetween: 90,
  loop: true,
  // loop: true,
  // slidesPerGroup: 1,
  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    767: {
      spaceBetween: 40,
      slidesPerView: 2
    },
    1280: {
      spaceBetween: 40,
      slidesPerView: 3
    },
    

  },
});
