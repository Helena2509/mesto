﻿import './pages/index.css';

import Card from './components/Card.js'

import PopupWithForm from './components/PopupWithForm.js'
import PopupWithImage from './components/PopupWithImage.js'
import Section from './components/Section.js'
import UserInfo from './components/UserInfo.js'
import { initialCards,
         buttonEdit,
         buttonAdd,
         popupProfile,
         popupPlace,
         nameInput,
         jobInput,
         titleInput,
         linkInput,
         elements,
         formPlaceValidation,
         formProfileValidation } from './utils/constants.js'


const cardImagePopup = new PopupWithImage('.popup_type_image');
cardImagePopup.setEventListeners();
function makeCard(argument) {
  const card = new Card(argument, '#element-template', cardImagePopup);
  const cardElement = card.generateCard();
  return cardElement;
}

const cardsSection = new Section({ items: initialCards,
 renderer: makeCard }, '.elements');
cardsSection.renderItems();

const userInfo = new UserInfo({ name: '.profile__author', description: '.profile__description' }, '.profile');
const popupProfileForm = new PopupWithForm('.popup_type_profile', submitFormProfile);
popupProfileForm.setEventListeners();

function openFormProfile () {
  formProfileValidation.resetFormValidation(nameInput);
  formProfileValidation.resetFormValidation(jobInput);
  const infoObject = userInfo.getUserInfo();
  nameInput.value = infoObject.name;
  jobInput.value = infoObject.description;
  popupProfileForm.open();
  formProfileValidation.enableValidation();
}

function submitFormProfile (evt) {
  evt.preventDefault(); 
  userInfo.setUserInfo(nameInput.value, jobInput.value);
  popupProfileForm.close();
}

buttonEdit.addEventListener('click', openFormProfile);

const popupPlaceForm = new PopupWithForm('.popup_type_place', submitFormPlace);
popupPlaceForm.setEventListeners();
function openFormPlace () {
  formPlaceValidation.resetFormValidation(titleInput);
  formPlaceValidation.resetFormValidation(linkInput);
  popupPlaceForm.open();
  titleInput.value = '';
  linkInput.value = '';
  formPlaceValidation.enableValidation();
}

function submitFormPlace (evt) {
  evt.preventDefault();
  const cardElement = makeCard({name: titleInput.value, link: linkInput.value});
  elements.prepend(cardElement);
  popupPlaceForm.close();
}

buttonAdd.addEventListener('click', openFormPlace);
