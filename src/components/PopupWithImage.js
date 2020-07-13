import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(imageLink, imageHeading) {
    super.open();
    this._container.querySelector('.popup__image').src = imageLink;
    this._container.querySelector('.popup__description').textContent = imageHeading;
  }
}
