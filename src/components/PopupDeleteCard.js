import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setDeleteListener(deleteCallback) {
    const buttonDelete = this._container.querySelector('.form__submit-button');
    buttonDelete.addEventListener('click', () => {
      deleteCallback();
    });
  }
}
