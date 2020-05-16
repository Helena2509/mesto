let editButton = document.querySelector('.profile__editButton');
let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.input_name');
let jobInput = document.querySelector('.input_description');
let author = document.querySelector('.profile__author');
let description = document.querySelector('.profile__description');
let formElement = document.querySelector('.form'); 
let closebutton = document.querySelector('.popup__closeButton');

function formOpen (popup) {
  popup.classList.add("popup_opened");
  nameInput.value = author.innerText;
  jobInput.value = description.innerText;
}

function formClose (popup) {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  let name = nameInput.value;
  let job = jobInput.value;
  author.textContent = name;
  description.textContent = job;
  formclose();
}

editButton.addEventListener('click', formOpen);
formElement.addEventListener('submit', formSubmitHandler);
closebutton.addEventListener('click', formClose);