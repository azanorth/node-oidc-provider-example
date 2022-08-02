let EMAIL_TOUCHED = false;

const validateEmail = (email) => {
  const rex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return rex.test(email);
};

const makeEmailValidate = () => {
  const emailVal = document.querySelector('.login__form-input_mail').value;
  if (!validateEmail(emailVal)) {
    document.querySelector('.login__error-email').innerHTML =
      'Error Invalid Email!<br>';

    document.querySelector('.login__form-input').className +=
      ' login__form-input_error';

    return false;
  }
  return true;
};

const removeErrorHint = () => {
  document.querySelector('.login__error-email').innerHTML = '';

  document
    .querySelector('.login__form-input')
    .classList.remove('login__form-input_error');

  document
    .querySelector('.login__form-input')
    .classList.remove('login__form-input_error');
};

document.getElementById('submit').addEventListener('click', (event) => {
  if (!makeEmailValidate()) {
    EMAIL_TOUCHED = true;
    event.preventDefault();
  } else {
    document.getElementById('submit-form').click();
  }
});

function validateEmailInput() {
  if (EMAIL_TOUCHED) {
    if (makeEmailValidate()) {
      removeErrorHint();
    }
  }
}
