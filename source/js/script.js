const headerBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
const headerLogo = document.querySelector('.header__img');
const header = document.querySelector('.header');

headerNav.classList.remove('header__nav--show');
header.classList.remove('header--no-js');
headerBtn.classList.remove('header__btn--close');

headerBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  headerNav.classList.toggle('header__nav--show');
  headerBtn.classList.toggle('header__btn--close');
});
