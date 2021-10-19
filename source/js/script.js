const headerBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
const headerLogo = document.querySelector('.header__img');
const header = document.querySelector('.header');
const input = document.querySelector('#tel');

// Меню

headerNav.classList.remove('header__nav--show');
header.classList.remove('header--no-js');
headerBtn.classList.remove('header__btn--close');

headerBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  header.classList.toggle('header--fullscreen');
  headerNav.classList.toggle('header__nav--show');
  headerBtn.classList.toggle('header__btn--close');
});

// Валидность формы

function validatePhone(input){
  let regex = /^\d[\d\(\)\ -]{4,14}\d$/;
  return regex.test(input.value);
  }

let form = document.querySelector('.promo__submit');

form.addEventListener('click', function(evt) {
  if (!validatePhone(input)){
    evt.preventDefault();
    input.style.border = '3px solid #ee0909';
  }else{
    input.style.border = '1px solid #0ad9c6';
  }
});

// Первый опыт с jQuery, не нашел лучшего варианта прокрутки к якорю

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var e = $(this.hash);
      e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
          scrollTop: e.offset().top
      }, 600, function () {
          var t = $(e);
          if (t.focus(), t.is(":focus")) return !1;
          t.attr("tabindex", "-1"), t.focus()
      }))
  }
});
