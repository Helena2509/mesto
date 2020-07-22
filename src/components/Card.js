export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick,
    openPopup
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._isMine = data.isMine;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__heading').textContent = this._name;
    this._element.querySelector(
      '.element__like-number'
    ).textContent = this._likes.length;
    if (this._isLiked) {
      this._element
        .querySelector('.element__like-button')
        .classList.toggle('element__like-button_active');
    }
    if (!this._isMine) {
      this._element.querySelector('.element__delete-button').remove();
    }
    return this._element;
  }

  _likeElement() {
    const elementhgh = this._element.querySelector('.element__like-button');
    const check = this._handleLikeClick(
      this._id,
      elementhgh.classList.contains('element__like-button_active')
    );

    elementhgh.classList.contains('element__like-button_active') ? (
      check.then((data) => {
        this._element.querySelector('.element__like-number').textContent =
          data.likes.length;
        elementhgh.classList.remove('element__like-button_active');
      })
    ) : (
      check.then((data) => {
        this._element.querySelector('.element__like-number').textContent =
          data.likes.length;
        elementhgh.classList.add('element__like-button_active');
      })
    );
  }
  

  _deleteElement(element) {
    return () => {
      this._handleDeleteClick(this._id);
      element.remove();
    };
  }

  _setEventListeners() {
    this._element
      .querySelector('.element__like-button')
      .addEventListener('click', () => {
        this._likeElement();
      });
    if (this._isMine) {
      this._element
        .querySelector('.element__delete-button')
        .addEventListener('click', () => {
          this._openPopup.open();
          this._openPopup.setDeleteListener(this._deleteElement(this._element));
        });
    }

    this._element
      .querySelector('.element__image')
      .addEventListener('click', () => {
        const imageLink = this._element.querySelector('.element__image').src;
        const imageHeading = this._element
          .closest('.element')
          .querySelector('.element__heading').textContent;
        this._handleCardClick.open(imageLink, imageHeading);
      });
  }
}
