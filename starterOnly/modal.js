function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.getElementById("close");
const btnVal = document.querySelectorAll("#val");

const form = document.getElementById("val");
const log = document.getElementById("log");

const modbod = document.getElementsByClassName('modal-body');


const modval = document.querySelectorAll(".mod-val");
const btnSub = document.querySelectorAll("#subm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log('lauchn')
}
// close modal
close.addEventListener('click', function myFunction() {
  modalbg.style.display = "none";
});





// vérification input et submit  modal
function vali(evt) {
evt.preventDefault()

 
  console.log(evt);
  var name = document.forms["myForm"]["name"];
  var last = document.forms["myForm"]["last"];
  var email = document.forms["myForm"]["email"];
  var birthdate = document.forms["myForm"]["birthdate"];
  var quantity = document.forms["myForm"]["quantity"];
  var checkbox1 = document.forms["myForm"]["checkbox1"];







  if (document.getElementById("name").value == "") {
    document.getElementById('errorname').innerHTML = "Veuillez entrez un prénom valide";
    name.focus();
    return false;
  } else {
    document.getElementById('errorname').innerHTML = "";
  }

  if (document.getElementById("last").value == "") {
    document.getElementById('errorlast').innerHTML = "Veuillez entrez un nom valide";
    last.focus();
    return false;
  } else {
    document.getElementById('errorname').innerHTML = "";
  }
  if (document.getElementById("email").value == "") {
    document.getElementById('erroremail').innerHTML = "Veuillez entrez une adresse mail valide";
    email.focus();
    return false;
  } else {
    document.getElementById('erroremail').innerHTML = "";
  }
  
  if (document.getElementById("birthdate").value == "") {
    document.getElementById('errorbirthdate').innerHTML = "Veuillez entrez une date de naissance valide";
    birthdate.focus();
    return false;
  } else {
    document.getElementById('errorbirthdate').innerHTML = "";
  }
  if (document.getElementById("quantity").value == "") {
    document.getElementById('errorequantity').innerHTML = "Veuillez entrez un nombre de tournois valide";
    quantity.focus();
    return false;
  } else {
    document.getElementById('errorequantity').innerHTML = "";
  }
  
  var loca = document.forms["myForm"]["location"];
  for (var i=0;  loca[i]; ++i) {
    console.log("resulta " + loca.value)
    if (!loca.value == Boolean(false) ) {
  console.log("elle passe ")
      document.getElementById('errorlocal').innerHTML = "";
    } else {
      console.log("elle ne passe pas ")
      document.getElementById('errorlocal').innerHTML = "Veuillez cochez une localité";
      loca.focus();
    }
  }
  if (checkbox1.checked === false) {
    document.getElementById('errorchek').innerHTML = "Veuillez cochez l'RGPD";
    checkbox1.focus();
    console.log("hello bugge2")
    return false;
  } else {
    document.getElementById('errorchek').innerHTML = "";
  }



  console.log("hello world")

  modalbg.style.display = "block";
  document.getElementById("modal-body").style.display = "none";
  document.getElementById("mod-val").style.display = "block";
  


}

form.addEventListener("submit", vali);

