const buttonEdit = document.querySelector('.profile__edit-button');
const author = document.querySelector('.profile__author');
const description = document.querySelector('.profile__description');
const buttonAdd = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.form'); 
const nameInput = document.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_description');
const titleInput = document.querySelector('.form__input_title');
const linkInput = document.querySelector('.form__input_link');
const elements = document.querySelector('.elements');
const buttonDelete = document.querySelector('.element__delete-button');
const imagePopup = document.querySelector('.popup__image');

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

function handleLikeButton(evt) {
  evt.target.classList.toggle('element__like-button_active');
};

function deleteCard(ev) {
  ev.target.closest('.element').remove()
}

function OpenPopupImage (e) {
  let imageLink = e.target.src;
  let imageHeading = e.target.closest('.element').querySelector('.element__heading').textContent;
  popup.querySelector('.popup__image').classList.add('popup__image_opened');
  popup.querySelector('.popup__description').classList.add('popup__description_opened');
  popup.querySelector('.popup__container').classList.add('popup__container_unseen');
  openPopup ();
  popup.querySelector('.popup__image').src = imageLink;
  popup.querySelector('.popup__description').textContent = imageHeading;
}

function addCard (name, img_src) {
  const template = document.querySelector('#element-template').content;
  const element = template.cloneNode(true);
  element.querySelector('.element__heading').textContent = name;
  element.querySelector('.element__image').src = img_src;
  element.querySelector('.element__image').alt = name;
  element.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  element.querySelector('.element__like-button').addEventListener('click', handleLikeButton);
  element.querySelector('.element__image').addEventListener('click', OpenPopupImage);
  elements.prepend(element);
}

initialCards.forEach(function (item) {
addCard(item.name, item.link);
})

function openPopup () {
  popup.classList.add('popup_opened');
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function openFormProfile () {
  openPopup ();
  nameInput.value = author.textContent;
  jobInput.value = description.textContent;
  document.querySelector('.popup__heading').textContent = 'Редактировать профиль';
  document.querySelector('.form__submit-button').textContent = 'Сохранить';
  formElement.addEventListener('submit', submitFormProfile);
}

function submitFormProfile (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closePopup ();
  formElement.removeEventListener('submit', submitFormProfile);
}

buttonEdit.addEventListener('click', openFormProfile);
buttonClose.addEventListener('click', closePopup);

function openFormPlace () {
  openPopup ();
  titleInput.value = '';
  linkInput.value = '';
  document.querySelector('.popup__heading').textContent = 'Новое место';
  document.querySelector('.form__submit-button').textContent = 'Создать';
  formElement.addEventListener('submit', submitFormPlace);
}

function submitFormPlace (evt) {
  evt.preventDefault(); 
  addCard(titleInput.value, linkInput.value);
  closePopup ();
  formElement.removeEventListener('submit', submitFormPlace);
}

buttonAdd.addEventListener('click', openFormPlace);

function closePopupImage(event){
  closePopup ();
  popup.querySelector('.popup__description').classList.remove('popup__description_opened');
  imagePopup.classList.remove('popup__image_opened');
  popup.querySelector('.popup__container').classList.remove('popup__container_unseen');
}

buttonClose.addEventListener('click', closePopupImage);