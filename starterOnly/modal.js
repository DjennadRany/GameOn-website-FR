// Fonction pour ajouter ou supprimer la classe "responsive" sur la navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Récupération des éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector("#close");
const ferme = document.querySelector("#ferme");
const submitBtn = document.querySelector("#val");
const form = document.getElementById("val");
const modalBody = document.querySelector('#modal-body');
const modalVal = document.querySelector("#mod-val");

// Écouteur d'événement pour soumettre le formulaire
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  function checkbox(input, error, errorLabel) {
    if (!input.checked) {
      error.textContent = errorLabel;
      input.focus();
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }

  function input(input, error, errorLabel) {
    if (input.value.trim() === "") {
      error.textContent = errorLabel;
   
      return false;
    } else {
      error.textContent = "";
      return true;
    }
  }

  const checkboxError = document.querySelector('#errorchek');
  const nameError = document.querySelector('#errorname');
  const lastNameError = document.querySelector('#errorlast');
  const emailError = document.querySelector('#erroremail');
  const birthdateError = document.querySelector('#errorbirthdate');
  const locationError = document.querySelector('#errorlocal');
  const quantityError = document.querySelector('#errorequantity');

  const checkboxInput = document.querySelector('#checkbox1');
  const nameInput = document.querySelector('#name');
  const lastNameInput = document.querySelector('#last');
  const emailInput = document.querySelector('#email');
  const birthdateInput = document.querySelector('#birthdate');
  const locationInput = document.forms["myForm"]["location"];
  const quantityInput = document.querySelector('#quantity');

  const isCheckboxValid = checkbox(checkboxInput, checkboxError, "Veuillez entrer un nombre de tournois valide");
  const isNameValid = input(nameInput, nameError, "Veuillez entrer un nom valide");
  const isLastNameValid = input(lastNameInput, lastNameError, "Veuillez entrer un nom valide");
  const isEmailValid = input(emailInput, emailError, "Veuillez entrer une adresse e-mail valide");
  const isBirthdateValid = input(birthdateInput, birthdateError, "Veuillez entrer une date de naissance valide");
  const isLocationValid = input(locationInput, locationError, "Veuillez entrer une localité");
  const isQuantityValid = input(quantityInput, quantityError, "Veuillez entrer un nombre de tournois valide");

  if (isCheckboxValid && isNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isLocationValid && isQuantityValid) {
    
    form.reset(); // Réinitialise le formulaire après l'envoi
    modalBody.style.display = "none";
    modalVal.style.display = "block";
  } 
});

// Écouteurs d'événement pour ouvrir et fermer la modale
modalBtns.forEach(button => {
  button.addEventListener('click', () => {
    modalbg.style.display = "block";
  });
});

closeBtn.addEventListener('click', () => {
  modalbg.style.display = "none";
});
ferme.addEventListener('click', () => {
  modalbg.style.display = "none";
});