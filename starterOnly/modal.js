// Fonction pour ajouter ou supprimer la classe "responsive" sur la navigation

const burger = document.querySelector("#burger");
burger.addEventListener('click', () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});


// Sélectionner tous les liens dans la barre de navigation
const navLinks = document.querySelectorAll('.main-navbar .blokmen a');

// Parcourir tous les liens
navLinks.forEach(link => {
  // Ajouter un événement de clic à chaque lien
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien

    // Supprimer la classe "active" de tous les liens
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Ajouter la classe "active" au lien cliqué
    this.classList.add('active');
  });
});

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

// Fonction pour afficher les messages d'erreur
function displayErrorMessages() {
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
  const locationInput = document.forms["val"]["location"];
  const quantityInput = document.querySelector('#quantity');
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const quantityRegex = /^([0-9]|[0-9][0-9]|99)$/;

  checkbox(checkboxInput, checkboxError, "Veuillez accepter les conditions générales");
  input(nameInput, nameError, "Veuillez entrer un prénom valide", nameRegex, "Veuillez entrer un prénom valide composé uniquement de lettres.");
  input(lastNameInput, lastNameError, "Veuillez entrer un nom de famille valide", nameRegex, "Veuillez entrer un nom de famille valide composé uniquement de lettres.");
  input(emailInput, emailError, "Veuillez entrer une adresse e-mail valide", emailRegex, "Veuillez entrer une adresse e-mail valide au format nom@exemple.com.");
  input(birthdateInput, birthdateError, "Veuillez entrer une date de naissance valide");
  input(locationInput, locationError, "Veuillez sélectionner une localité");
  input(quantityInput, quantityError, "Veuillez entrer un nombre de tournois valide", quantityRegex, "Veuillez entrer un nombre de tournois valide entre 1 et 99.");
}

// Écouteur d'événement pour soumettre le formulaire
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  displayErrorMessages();

  const isCheckboxValid = document.querySelector('#errorchek').textContent === "";
  const isNameValid = document.querySelector('#errorname').textContent === "";
  const isLastNameValid = document.querySelector('#errorlast').textContent === "";
  const isEmailValid = document.querySelector('#erroremail').textContent === "";
  const isBirthdateValid = document.querySelector('#errorbirthdate').textContent === "";
  const isLocationValid = document.querySelector('#errorlocal').textContent === "";
  const isQuantityValid = document.querySelector('#errorequantity').textContent === "";

  if (isCheckboxValid && isNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isLocationValid && isQuantityValid) {
    form.reset(); // Réinitialise le formulaire après l'envoi
    modalBody.style.display = "none";
    modalVal.style.display = "block";
  }
});

// Ajout des écouteurs d'événements "blur" pour la vérification des champs lorsqu'on quitte un champ
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last');
const emailInput = document.querySelector('#email');
const birthdateInput = document.querySelector('#birthdate');
const locationInput = document.forms["val"]["location"];
const quantityInput = document.querySelector('#quantity');
const checkboxInput = document.querySelector('#checkbox1');

nameInput.addEventListener("blur", displayErrorMessages);
lastNameInput.addEventListener("blur", displayErrorMessages);
emailInput.addEventListener("blur", displayErrorMessages);
birthdateInput.addEventListener("blur", displayErrorMessages);
quantityInput.addEventListener("blur", displayErrorMessages);
checkboxInput.addEventListener("blur", displayErrorMessages);


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
