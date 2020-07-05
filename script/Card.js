export class Card {
  constructor (data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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

  _openPopup () {
    const imageLink = this._element.querySelector('.element__image').src;
    const imageHeading = this._element.closest('.element').querySelector('.element__heading').textContent;
    const popupImage = document.querySelector('.popup_type_image');
    popupImage.querySelector('.popup__image').src = imageLink;
    popupImage.querySelector('.popup__description').textContent = imageHeading;
    popupImage.classList.add('popup_opened');
    document.addEventListener('keydown', function(evt) { 
      if (evt.key === 'Escape') {
        closePopup(popupImage);
      }
    })
  }

  _setEventListeners () {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._likeElement();
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteElement();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openPopup();
    });
  }

  
}





