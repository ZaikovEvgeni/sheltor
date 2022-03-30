import './style.sass'

document.body.addEventListener('click', (e) => console.log(e.target))


const logoTittle = document.querySelector('.header__title');
const logoText = document.querySelector('.header__text');


// бургер меню
const burgerMenu = document.querySelector('.burger-menu__btn');
const menu = document.querySelector('.menu');

// всплывающее окно с информацией о животном
const btnOpenAnimalCard = document.querySelectorAll('.friends-card__button');
const popUpAnimalCard = document.querySelector('.animal-card');
const btnCloseAnimalCard = document.querySelector('.animal-card__btn-close');

//  всплывающее окно с информацией о животном
btnOpenAnimalCard.forEach(element => {
  element.addEventListener('click', function() {
    addClassNameActive(popUpAnimalCard);
  })
});

btnCloseAnimalCard.addEventListener('click', () => addClassNameActive(popUpAnimalCard));








// бургер меню
burgerMenu.addEventListener('click', function (e) {
  e.preventDefault();
  addClassNameActive(burgerMenu);
  addClassNameActive.call(menu, menu);
  addClassNameActive(logoTittle);
  addClassNameActive(logoText);
});




















// ================================ functions ========================================
function addClassNameActive(element) {
  element.classList.toggle('active');
}