import './index.css';
import Card from '../components/Card.js';
import Api from '../components/Api.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  buttonEdit,
  buttonAdd,
  popupProfile,
  popupPlace,
  popupAvatar,
  avatarInput,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  elements,
  object,
  buttonImage
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
  headers: {
    authorization: '02a3d997-e4eb-47bc-b832-a3089c38bc48',
    'Content-Type': 'application/json',
  },
});

const popupDelete = new PopupDeleteCard('.popup_type_delete');
popupDelete.setEventListeners();
const cardImagePopup = new PopupWithImage('.popup_type_image');
cardImagePopup.setEventListeners();
function makeCard(element) {
  element.isMine = element.owner._id === userInfo.getUserInfo()._id;
  for (let user of element.likes) {
    if (user._id === userInfo.getUserInfo()._id) {
      element.isLiked = true;
      break;
    } else {
      element.isLiked = false;
    }
  }
  const card = new Card(
    element,
    '#element-template',
    cardImagePopup,
    handleLikeClick,
    handleDeleteClick,
    popupDelete
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function createSection(items) {
  const cardsSection = new Section(
    { items: items, renderer: makeCard },
    '.elements'
  );
  cardsSection.renderItems();
}

api.getInitialCards().then(createSection);
const userInfo = new UserInfo(
  {
    name: '.profile__author',
    description: '.profile__description',
    avatar: '.profile__image',
    _id: '',
  },
  '.profile'
);
const popupProfileForm = new PopupWithForm(
  '.popup_type_profile',
  submitFormProfile
);
popupProfileForm.setEventListeners();
function generateProfile(data) {
  userInfo.setUserInfo(data.name, data.about, data.avatar, data._id);
}
api.getUserInfo().then(generateProfile);

function handleLikeClick(id, isLiked) {
  if (isLiked) {
    return api.deleteLike(id);
  } else {
    return api.setLike(id);
  }
}

function handleDeleteClick(id) {
  api.deleteCard(id);
}

const formProfileValidation = new FormValidator(object, popupProfile);
function openFormProfile() {
  formProfileValidation.resetFormValidation(nameInput);
  formProfileValidation.resetFormValidation(jobInput);
  const infoObject = userInfo.getUserInfo();
  nameInput.value = infoObject.name;
  jobInput.value = infoObject.description;
  popupProfileForm.open();
  formProfileValidation.enableValidation();
}

function submitFormProfile(evt) {
  evt.preventDefault();
  popupProfileForm.isLoading(true);
  api
    .editUserInfo(nameInput.value, jobInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about, data.avatar, data._id);
    })
    .finally(() => {
      popupProfileForm.isLoading(false);
      popupProfileForm.close();
    });
}

buttonEdit.addEventListener('click', openFormProfile);

const popupAvatarForm = new PopupWithForm(
  '.popup_type_avatar',
  submitFormAvatar
);
popupAvatarForm.setEventListeners();
const formAvatarValidator = new FormValidator(object, popupAvatar);
function openPopupAvatar() {
  formAvatarValidator.resetFormValidation(avatarInput);
  popupAvatarForm.open();
  const infoObject = userInfo.getUserInfo();
  avatarInput.value = infoObject.avalink;
  formAvatarValidator.enableValidation();
}

function submitFormAvatar(evt) {
  evt.preventDefault();
  popupAvatarForm.isLoading(true);
  api
    .editAvatarInfo(avatarInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      userInfo.setUserInfo(data.name, data.about, data.avatar, data._id);
    })
    .finally(() => {
      popupAvatarForm.isLoading(false);
      popupAvatarForm.close();
    });
}

buttonImage.addEventListener('click', openPopupAvatar);

const popupPlaceForm = new PopupWithForm('.popup_type_place', submitFormPlace);
popupPlaceForm.setEventListeners();
const formPlaceValidation = new FormValidator(object, popupPlace);
function openFormPlace() {
  formPlaceValidation.resetFormValidation(titleInput);
  formPlaceValidation.resetFormValidation(linkInput);
  popupPlaceForm.open();
  titleInput.value = '';
  linkInput.value = '';
  formPlaceValidation.enableValidation();
}

function submitFormPlace(evt) {
  evt.preventDefault();
  popupPlaceForm.isLoading(true);
  api
    .addCard(titleInput.value, linkInput.value)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      const cardElement = makeCard(data);
      elements.prepend(cardElement);
    })
    .finally(() => {
      popupPlaceForm.isLoading(false);
      popupPlaceForm.close();
    });
}

buttonAdd.addEventListener('click', openFormPlace);
