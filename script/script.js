let editButton = document.querySelector('.profile__editButton');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.input_name');
let jobInput = document.querySelector('.input_description');
let author = document.querySelector('.profile__author');
let description = document.querySelector('.profile__description');
let formElement = document.querySelector('.form'); 
let closebutton = document.querySelector('.popup__closeButton');

function formOpen () {
  popup.classList.add('popup_opened');
  nameInput.value = author.textContent;
  jobInput.value = description.textContent;
}

function formClose () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  author.textContent = nameInput.value;
  description.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', formOpen);
formElement.addEventListener('submit', formSubmitHandler);
closebutton.addEventListener('click', formClose);