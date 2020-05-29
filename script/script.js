let editButton = document.querySelector('.profile__editButton');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.input_name');
let jobInput = document.querySelector('.input_description');
let author = document.querySelector('.profile__author');
let description = document.querySelector('.profile__description');
let formElement = document.querySelector('.form'); 
let closebutton = document.querySelector('.popup__closeButton');
let elements = document.querySelector('.elements');
let DeleteButton = document.querySelector('.element__deleteButton');
let popupImage = document.querySelector('.popup-image');
let addButton = document.querySelector('.profile__addButton');
let popupMesto = document.querySelector('.popup-mesto');
let formMestoElement = document.querySelector('.form-mesto'); 
let closeMestobutton = document.querySelector('.popup-mesto__closeButton');
let titleInput = document.querySelector('.input_title');
let linkInput = document.querySelector('.input_link');

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

function addCard (name, img_src) {
  const Template = document.querySelector('#element-template').content;
  let Element = Template.cloneNode(true);
  Element.querySelector('.element__heading').textContent = name;
  Element.querySelector('.element__image').src = img_src;
  Element.querySelector('.element__image').alt = name;
  Element.querySelector('.element__deleteButton').addEventListener('click', rom);
  Element.querySelector('.element__group').addEventListener('click', likeActive);
  Element.querySelector('.element__image').addEventListener('click', imagePopupOpen);
  elements.prepend(Element);
}

initialCards.forEach(function (item) {
addCard(item.name, item.link);
})

function likeActive(evt) {
  evt.target.classList.toggle('group-like');
};

function rom(ev) {
  ev.target.closest('.element').remove()
}

function imagePopupOpen (e) {
  let imageLink = e.target.src;
  let imageHeading = e.target.closest('.element').querySelector('.element__heading').textContent;
  popupImage.classList.add('popup-image_opened');
  popupImage.querySelector('.popup-image__image').src = imageLink;
  popupImage.querySelector('.popup-image__heading').textContent = imageHeading;
  function imagePopupClose(event){
  popupImage.classList.remove('popup-image_opened');
  }
  popupImage.querySelector('.popup-image__closeButton').addEventListener('click', imagePopupClose);
}

function formOpen () {
  popup.classList.add('popup_opened');
  nameInput.value = author.textContent;
  jobInput.value = description.textContent;
}

function formClose () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  description.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', formOpen);
formElement.addEventListener('submit', formSubmitHandler);
closebutton.addEventListener('click', formClose);

function formMestoOpen () {
  popupMesto.classList.add('popup-mesto_opened');
  titleInput.value = '';
  linkInput.value = '';
}

function formMestoClose () {
  popupMesto.classList.remove('popup-mesto_opened');
}

function formMestoSubmit (evt) {
  evt.preventDefault(); 
  addCard(titleInput.value, linkInput.value);
  popupMesto.classList.remove('popup-mesto_opened');
}

addButton.addEventListener('click', formMestoOpen);
formMestoElement.addEventListener('submit', formMestoSubmit);
closeMestobutton.addEventListener('click', formMestoClose);