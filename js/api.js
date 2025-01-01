
import { pristine, resetForm } from './form.js';

export const uploadForm = document.querySelector('.img-upload__form');
export const fileInput = uploadForm.querySelector('.img-upload__input');
export const hashtagInput = uploadForm.querySelector('.text__hashtags');
export const descriptionInput = uploadForm.querySelector('.text__description');


// --------- Форма и создание поста ---------

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const formData = new FormData(uploadForm);
    const submitButton = uploadForm.querySelector('.img-upload__submit');
    submitButton.disabled = true; // Блокируем кнопку

    fetch('https://29.javascript.htmlacademy.pro/kekstagram', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          showSuccessMessage(); // Показ успешного сообщения
          resetForm();
        } else {
          throw new Error('Ошибка отправки данных');
        }
      })
      .catch(() => {
        showErrorMessage(); // Показ сообщения об ошибке
      })
      .finally(() => {
        submitButton.disabled = false; // Разблокируем кнопку
      });
  }
});

// --------- Обработчики успеха и ошибок ---------

function showSuccessMessage() {
  const successTemplate = document.querySelector('#success').content;
  const successElement = successTemplate.cloneNode(true);
  document.body.appendChild(successElement);

  const closeButton = document.querySelector('.success__button');
  const successOverlay = document.querySelector('.success');

  function closeSuccess() {
    successOverlay.remove();
  }

  closeButton.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeSuccess();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target === successOverlay) {
      closeSuccess();
    }
  });
}

function showErrorMessage() {
  const errorTemplate = document.querySelector('#error').content;
  const errorElement = errorTemplate.cloneNode(true);
  document.body.appendChild(errorElement);

  const closeButton = document.querySelector('.error__button');
  const errorOverlay = document.querySelector('.error');

  function closeError() {
    errorOverlay.remove();
  }

  closeButton.addEventListener('click', closeError);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeError();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target === errorOverlay) {
      closeError();
    }
  });
}
