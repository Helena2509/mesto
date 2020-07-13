import FormValidator from '../components/FormValidator.js'

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupPlace = document.querySelector('.popup_type_place');
export const nameInput = document.querySelector('.form__input_name');
export const jobInput = document.querySelector('.form__input_description');
export const titleInput = document.querySelector('.form__input_title');
export const linkInput = document.querySelector('.form__input_link');
export const elements = document.querySelector('.elements');

export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const formPlaceValidation = new FormValidator ({
  inputs: '.form__input',
  formSubmit: '.form__submit-button',
  form: '.form',
  fieldset: '.form__set',
  cls_type_error: 'form__input_type_error',
  cls_error_active: 'form__input-error_active',
  cls_inactive: 'form__submit_inactive'
}, popupPlace);

export const formProfileValidation = new FormValidator ({
  inputs: '.form__input',
  formSubmit: '.form__submit-button',
  form: '.form',
  fieldset: '.form__set',
  cls_type_error: 'form__input_type_error',
  cls_error_active: 'form__input-error_active',
  cls_inactive: 'form__submit_inactive'
}, popupProfile);