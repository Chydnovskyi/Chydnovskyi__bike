let reg = /^(\+7|7|8|+3|3)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const button = document.querySelector('.promo__submit');
const tel = document.getElementById('#tel');
const inputTel = document.querySelector('.promo__input-tel');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  if(!validate(reg, inp.value))
  {
    inputTel.classList.add('promo__input--notvalid');
  } else {
    inputTel.classList.add('promo__input--valid');
  }
});

function validate(reg, inp) {
  return reg.test(inp);
}
