const editButton = document.querySelector('.profile__editButton');
editButton.addEventListener('click', function forms (evt) {
  evt.preventDefault(); 
  let popup = document.querySelector('.popup');
  popup.classList.add("popup_opened");
  let nameInput = document.querySelector('.input_name');
  let jobInput = document.querySelector('.input_description');
  let author = document.querySelector('.profile__author');
  let description = document.querySelector('.profile__description');
  nameInput.value = author.innerText;
  jobInput.value = description.innerText;

  let formElement = document.querySelector('.form'); 
  function formSubmitHandler (evt) {
      evt.preventDefault(); 
      let name = nameInput.value;
      let job = jobInput.value;
      author.textContent = name;
      description.textContent = job;
      popup.classList.remove("popup_opened");
  }
  formElement.addEventListener('submit', formSubmitHandler);


  const closebutton = document.querySelector('.popup__closeButton');
  closebutton.addEventListener('click', function formclose (evt) {
    evt.preventDefault(); 
    popup.classList.remove("popup_opened");
  });
});



