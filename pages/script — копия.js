const editButton = document.querySelector('.profile__edit_button');
editButton.addEventListener('click', function forms (evt) {
  evt.preventDefault(); 
  let popup = document.querySelector('.popup');
  popup.style.display = "block";

  const formElement = document.querySelector('.form__submit_button'); 
  formElement.addEventListener('click', function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector('.form__name');
    let jobInput = document.querySelector('.form__description');
    let name = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let author = document.querySelector('.profile__author');
    let description = document.querySelector('.profile__description');
    author.textContent = name;
    description.textContent = job;
    let popup = document.querySelector('.popup');
    popup.style.display = "block";
  });

  const closebutton = document.querySelector('.form__close_button');
  closebutton.addEventListener('click', function formclose (evt) {
    evt.preventDefault(); 
    let popup = document.querySelector('.popup');
    popup.style.display = "none";
  });


});


