import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._inputs = this._container.querySelectorAll('.form__input');
  }

  _getInputValues() {
    const inputs = this._container.querySelectorAll('.form__input');
  }

  setEventListeners() {
    super.setEventListeners();
    this._container
      .querySelector('form')
      .addEventListener('submit', this._submitCallback);
  }

  close() {
    super.close();
    this._container.querySelector('form').reset();
  }

  isLoading(load) {
    if (load) {
      this._container.querySelector('.form__submit-button').textContent =
        'Сохранение...';
    } else {
      this._container.querySelector('.form__submit-button').textContent =
        'Сохранить';
    }
  }
}
