﻿import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'
import { initialCards } from './initialCards.js'

const buttonEdit = document.querySelector('.profile__edit-button');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');
const buttonAdd = document.querySelector('.profile__add-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupImage = document.querySelector('.popup_type_image');
const buttonCloseProfile = document.querySelector('.popup__close-button_type_profile');
const buttonClosePlace = document.querySelector('.popup__close-button_type_place');
const buttonCloseImage = document.querySelector('.popup__close-button_type_image');
const overlayProfile = document.querySelector('.popup__overlay-black_type_profile');
const overlayPlace = document.querySelector('.popup__overlay-black_type_place');
const overlayImage = document.querySelector('.popup__overlay-black_type_image');
const formElement = document.querySelector('.form_type_profile'); 
const fromPlace = document.querySelector('.form_type_place');
const nameInput = document.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_description');
const titleInput = document.querySelector('.form__input_title');
const linkInput = document.querySelector('.form__input_link');
const elements = document.querySelector('.elements');

function makeCard(argument) {
  const card = new Card(argument, '#element-template');
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = makeCard(item);
  elements.append(cardElement);
});


function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

buttonCloseImage.addEventListener('click', function(){closePopup (popupImage)});
overlayImage.addEventListener('click', function(){closePopup (popupImage)});

function openFormProfile () {
  const formProfileValidation = new FormValidator ({
    inputs: '.form__input',
    formSubmit: '.form__submit-button',
    form: '.form',
    fieldset: '.form__set',
    cls_type_error: 'form__input_type_error',
    cls_error_active: 'form__input-error_active',
    cls_inactive: 'form__submit_inactive'
  }, popupProfile);
  formProfileValidation.resetFormValidation(nameInput);
  formProfileValidation.resetFormValidation(jobInput);

  nameInput.value = author.textContent;
  jobInput.value = description.textContent;
  openPopup (popupProfile);
  formProfileValidation.enableValidation();
  document.addEventListener('keydown', function(evt) { 
    if (evt.key === 'Escape') {
      closePopup(popupProfile);
    }
  })
}

function submitFormProfile (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener('submit', submitFormProfile);
buttonEdit.addEventListener('click', openFormProfile);
buttonCloseProfile.addEventListener('click', function(){closePopup (popupProfile)});
overlayProfile.addEventListener('click', function(){closePopup (popupProfile)});


function openFormPlace () {
  const formPlaceValidation = new FormValidator ({
    inputs: '.form__input',
    formSubmit: '.form__submit-button',
    form: '.form',
    fieldset: '.form__set',
    cls_type_error: 'form__input_type_error',
    cls_error_active: 'form__input-error_active',
    cls_inactive: 'form__submit_inactive'
  }, popupPlace);
  formPlaceValidation.resetFormValidation(titleInput);
  formPlaceValidation.resetFormValidation(linkInput);
  openPopup (popupPlace);
  titleInput.value = '';
  linkInput.value = '';
  formPlaceValidation.enableValidation();
  document.addEventListener('keydown', function(evt) { 
    if (evt.key === 'Escape') {
      closePopup(popupPlace);
    }
  })
}

function submitFormPlace (evt) {
  evt.preventDefault();
  const cardElement = makeCard({name: titleInput.value, link: linkInput.value});
  document.querySelector('.elements').prepend(cardElement);
  closePopup (popupPlace);
  fromPlace.reset();
  
}

fromPlace.addEventListener('submit', submitFormPlace);
buttonAdd.addEventListener('click', openFormPlace);
buttonClosePlace.addEventListener('click', function(){closePopup (popupPlace)});
overlayPlace.addEventListener('click', function(){closePopup (popupPlace)});