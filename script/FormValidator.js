export class FormValidator {
  constructor(options, form) {
    this._options = options;
    this._form = form;
  }

  enableValidation() {
    this._toggleButtonState(this._form, this._form.querySelector(this._options.formSubmit));
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState(this._form, this._form.querySelector(this._options.formSubmit));
    });

    const fieldsetList = Array.from(this._form.querySelectorAll(this._options.fieldset));

    fieldsetList.forEach((fieldSet) => {
      this._setEventListeners(fieldSet);
    });
  }

  _toggleButtonState(formElement, buttonElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._options.inputs));
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._options.cls_inactive);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._options.cls_inactive);
    }
  }

  _setEventListeners(fieldSet) {
    const inputList = Array.from(fieldSet.querySelectorAll(this._options.inputs));
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(fieldSet, inputElement);
        this._toggleButtonState(fieldSet, this._form.querySelector(this._options.formSubmit));
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _checkInputValidity(formElement,inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._options.cls_type_error);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._options.cls_error_active);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._options.cls_type_error);
    errorElement.classList.remove(this._options.cls_error_active);
    errorElement.textContent = '';
  }
}

