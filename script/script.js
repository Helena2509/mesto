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
const formElement = document.querySelector('.form_type_profile'); 
const fromPlace = document.querySelector('.form_type_place');
const nameInput = document.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_description');
const titleInput = document.querySelector('.form__input_title');
const linkInput = document.querySelector('.form__input_link');
const elements = document.querySelector('.elements');

const initialCards = [
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

function openPopup (evt) {
  evt.classList.add('popup_opened');
}

function closePopup (evt) {
  evt.classList.remove('popup_opened');
}

function handleLikeButton(evt) {
  evt.target.classList.toggle('element__like-button_active');
};

function deleteCard(evt) {
  evt.target.closest('.element').remove()
}

function openPopupImage (e) {
  const imageLink = e.target.src;
  const imageHeading = e.target.closest('.element').querySelector('.element__heading').textContent;
  popupImage.querySelector('.popup__image').src = imageLink;
  popupImage.querySelector('.popup__description').textContent = imageHeading;
  openPopup (popupImage);
}

 function makeCard (name, imgSrc) {
  const template = document.querySelector('#element-template').content;
  const element = template.cloneNode(true);
  element.querySelector('.element__heading').textContent = name;
  element.querySelector('.element__image').src = imgSrc;
  element.querySelector('.element__image').alt = name;
  element.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  element.querySelector('.element__like-button').addEventListener('click', handleLikeButton);
  element.querySelector('.element__image').addEventListener('click', openPopupImage);
  return element;
}

function addCard (name, imgSrc) {
  const element = makeCard (name, imgSrc);
  elements.prepend(element);
}

initialCards.forEach(function (item) {
  addCard(item.name, item.link);
})

buttonCloseImage.addEventListener('click', function(){closePopup (popupImage)});

function openFormProfile () {
  nameInput.value = author.textContent;
  jobInput.value = description.textContent;
  openPopup (popupProfile);
}

function submitFormProfile (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closePopup (popupProfile);
}

formElement.addEventListener('submit', submitFormProfile);
buttonEdit.addEventListener('click', openFormProfile);
buttonCloseProfile.addEventListener('click', function(){closePopup (popupProfile)});

function openFormPlace () {
  openPopup (popupPlace);
  titleInput.value = '';
  linkInput.value = '';
}

function submitFormPlace (evt) {
  evt.preventDefault(); 
  addCard(titleInput.value, linkInput.value);
  closePopup (popupPlace);
}

fromPlace.addEventListener('submit', submitFormPlace);
buttonAdd.addEventListener('click', openFormPlace);
buttonClosePlace.addEventListener('click', function(){closePopup (popupPlace)});