const headerBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const input = document.querySelector('#tel');
const inputSecond = document.querySelector('.promo__input--second');
const form = document.querySelector('.promo__submit');


// Меню

headerNav.classList.remove('header__nav--show');
header.classList.remove('header--no-js');

(function () {
  if(headerBtn){
    headerBtn.classList.remove('header__btn--close');
    headerBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      header.classList.toggle('header--fullscreen');
      headerNav.classList.toggle('header__nav--show');
      headerBtn.classList.toggle('header__btn--close');
    });
  }
})();

// Валидность формы


(function () {
  function validatePhone(inp){
    const regex = /^\d[\d-]{4,14}\d$/;
    return regex.test(inp.value);
  }

  if(form){
    form.addEventListener('click', (evt) => {
      if (!validatePhone(input)){
        evt.preventDefault();
        inputSecond.classList.add('promo__input--notvalid');
      }else{
        inputSecond.classList.remove('promo__input--notvalid');
        inputSecond.classList.add('promo__input--valid');
      }
    });
  }
})();


// Первый опыт с jQuery, не нашел лучшего варианта прокрутки к якорю

(function () {
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let e = $(this.hash);
      e = e.length ? e : $(`[name=${  this.hash.slice(1)  }]`), e.length && (t.preventDefault(), $('html, body').animate({
        scrollTop: e.offset().top,
      }, 600, () => {
        const et = $(e);
        if (et.focus(), et.is(':focus')) {return !1;}
        et.attr('tabindex', '-1'), et.focus();
      }));
    }
  });
})();
