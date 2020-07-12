export default class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(popupSelector);
  }
  open() {
    this._container.classList.add('popup_opened');
  }

  close() {
    this._container.classList.remove('popup_opened');
  }

  _handleEscClose() { 
    document.addEventListener('keydown',(evt) => { 
    if (evt.key === 'Escape') {
      this.close();
    }
  })
  }

  setEventListeners() { 
    const buttonClose = this._container.querySelector('.popup__close-button');
    buttonClose.addEventListener('click', () => {this.close()});
    const overlay = this._container.querySelector('.popup__overlay-black');
    overlay.addEventListener('click', () => {this.close()});
    this._handleEscClose();
  }
}
