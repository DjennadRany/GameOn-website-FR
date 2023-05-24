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

// Vérification de la validité des champs
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

function input(input, error, errorLabel, regex = null, regexErrorMessage = "Veuillez entrer une valeur valide") {
  if (input.value.trim() === "") {
    error.textContent = errorLabel;
    return false;
  } else if (regex && !regex.test(input.value.trim())) {
    error.textContent = regexErrorMessage;
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

// Écouteur d'événement pour soumettre le formulaire
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

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
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const quantityRegex = /^([1-9]|[1-9][0-9]|99)$/;


  const isCheckboxValid = checkbox(checkboxInput, checkboxError, "Veuillez accepter les conditions générales");
  const isNameValid = input(nameInput, nameError, "Veuillez entrer un prénom valide", nameRegex, "Veuillez entrer un prénom valide composé uniquement de lettres.");
  const isLastNameValid = input(lastNameInput, lastNameError, "Veuillez entrer un nom de famille valide", nameRegex, "Veuillez entrer un nom de famille valide composé uniquement de lettres.");
  const isEmailValid = input(emailInput, emailError, "Veuillez entrer une adresse e-mail valide", emailRegex, "Veuillez entrer une adresse e-mail valide au format nom@exemple.com.");
  const isBirthdateValid = input(birthdateInput, birthdateError, "Veuillez entrer une date de naissance valide");
  const isLocationValid = input(locationInput, locationError, "Veuillez sélectionner une localité");
  const isQuantityValid = input(quantityInput, quantityError, "Veuillez entrer un nombre de tournois valide", quantityRegex, "Veuillez entrer un nombre de tournois valide entre 1 et 99.");

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
