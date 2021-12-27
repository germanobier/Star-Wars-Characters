const logo = document.querySelector(".logo");
const formbox = document.querySelector(".formbox");
const inputMail = document.querySelector(".input-mail");
const formboxButton = document.querySelector(".formbox-button");
const resultButton = document.querySelector(".result-button");
let invalidText = document.querySelector(".invalid-text");
let mailValidation = null;

function inputMailFocused() {
  inputMail.classList.add("focused");
}

function inputMailFocusOut() {
  inputMail.classList.remove("focused");
}

function buttonFocused() {
  formboxButton.classList.add("focused");
}

function buttonFocusOut() {
  formboxButton.classList.remove("focused");
}

function emailValidation() {
  if (inputMail.value.length >= 3 && inputMail.value.indexOf("@") != -1) {
    mailValidation = true;
    formboxButton.classList.add("valid");
    inputMail.classList.add("valid");
  } else {
    mailValidation = false;
    formboxButton.classList.remove("valid");
    inputMail.classList.remove("valid");
  }

  if (mailValidation == false && inputMail.value.length > 0) {
    inputMail.classList.add("invalid-input");
    invalidText.classList.add("on");
    invalidText.innerText = "E-mail inválido";
  } else {
    inputMail.classList.remove("invalid-input");
    invalidText.classList.remove("on");
  }
}

inputMail.addEventListener("focusin", () => {
  inputMailFocused();
});

inputMail.addEventListener("focusout", () => {
  inputMailFocusOut();
});

inputMail.addEventListener("keyup", () => {
  emailValidation();
});

formboxButton.addEventListener("focusin", () => {
  buttonFocused();
});

formboxButton.addEventListener("focusout", () => {
  buttonFocusOut();
});
