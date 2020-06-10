
function setSubmitButtonStateProfile(isFormValid) {
  if (isFormValid) {
    buttonSubmitProfile.removeAttribute('disabled');
    buttonSubmitProfile.classList.remove('form__submit-button_type_profile_disabled');
  } else {
    buttonSubmitProfile.setAttribute('disabled', true);
    buttonSubmitProfile.classList.add('form__submit-button_type_profile_disabled');
  }
}   

function setSubmitButtonStatePlace(isFormValid) {
  if (isFormValid) {
    buttonSubmitPlace.removeAttribute('disabled');
    buttonSubmitPlace.classList.remove('form__submit-button_type_place_disabled');
  } else {
    buttonSubmitPlace.setAttribute('disabled', true);
    buttonSubmitPlace.classList.add('form__submit-button_type_place_disabled');
  }
}

fromPlace.addEventListener('input', function (evt) {
  const isValid = titleInput.value.length > 1 && linkInput.value.length > 1;
  setSubmitButtonStatePlace(isValid);
});


formElement.addEventListener('input', function (evt) {
  const isValid = nameInput.value.length > 1 && jobInput.value.length > 1;
  setSubmitButtonStateProfile(isValid);
});









const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));

  toggleButtonState(inputList, buttonSubmitProfile);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonSubmitProfile);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));

fieldsetList.forEach((fieldSet) => {
  setEventListeners(fieldSet);
});
    
  
    
  });
};



const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {

  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add('form__submit_inactive');
  } else {

    buttonElement.classList.remove('form__submit_inactive');
  }
};
enableValidation();