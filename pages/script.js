const editButton = document.querySelector('.profile__editButton');
editButton.addEventListener('click', function forms (evt) {
  evt.preventDefault(); 
  let popup = document.querySelector('.popup');
  popup.style.display = "block";
  let body = document.querySelector('.body');
  body.style.overflow = "hidden";
  let nameInput = document.querySelector('.form__name');
  let jobInput = document.querySelector('.form__description');
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
      popup.style.display = "none";
      body.style.overflow = "visible";
  }
  formElement.addEventListener('submit', formSubmitHandler);


  const closebutton = document.querySelector('.form__closeButton');
  closebutton.addEventListener('click', function formclose (evt) {
    evt.preventDefault(); 
    popup.style.display = "none";
    body.style.overflow = "visible";
  });
});



