export default class Card {
  constructor (data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__heading').textContent = this._name;

    return this._element;
  }

  _likeElement() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _deleteElement() {
    this._element.remove()
  }

  _setEventListeners () {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._likeElement();
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteElement();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      const imageLink = this._element.querySelector('.element__image').src;
      const imageHeading = this._element.closest('.element').querySelector('.element__heading').textContent;
      this._handleCardClick.open(imageLink, imageHeading);
    });
  }
}