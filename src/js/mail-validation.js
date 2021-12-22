const logo = document.querySelector(".logo");
const mailbox = document.querySelector(".mailbox");
const inputMail = document.querySelector(".input-mail");
const mailboxButton = document.querySelector(".mailbox-button");
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
  mailboxButton.classList.add("focused");
}

function buttonFocusOut() {
  mailboxButton.classList.remove("focused");
}

function emailValidation() {
  if (inputMail.value.length >= 3 && inputMail.value.indexOf("@") != -1) {
    mailValidation = true;
    mailboxButton.classList.add("valid");
    inputMail.classList.add("valid");
  } else {
    mailValidation = false;
    mailboxButton.classList.remove("valid");
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

mailboxButton.addEventListener("focusin", () => {
  buttonFocused();
});

mailboxButton.addEventListener("focusout", () => {
  buttonFocusOut();
});

// PÁGINA DE DIGITAR O PERSONAGEM

const hello = document.querySelector(".hello");
const textArea = document.querySelector(".text-area");
const mailboxForm = document.querySelector(".mailbox-form");
const inputChar = document.createElement("input");
const searchUrl = "https://swapi.py4e.com/api/people/?search=";
const resultBox = document.querySelector(".result-box");
let charValidationStyle = null;
let characterUrl = "https://swapi.py4e.com/api/people/?search=";
let character = null;

function inputCharFocused() {
  inputChar.classList.add("focused");
}

function inputCharFocusOut() {
  inputChar.classList.remove("focused");
}

inputChar.addEventListener("focusin", () => {
  inputCharFocused();
});

inputChar.addEventListener("focusout", () => {
  inputCharFocusOut();
});

mailboxButton.addEventListener("click", () => {
  if (mailValidation == true) {
    logo.style.opacity = "0";
    logo.style.visibility = "hidden";
    mailboxButton.classList.remove("valid");
    hello.style.display = "none";
    inputMail.style.display = "none";
    textArea.innerHTML =
      "Agora, digite seu personagem favorito de <br> Star Wars";
    inputChar.setAttribute("type", "text");
    inputChar.setAttribute("placeholder", "Ex: Darth Vader");
    inputChar.classList.add("input-mail");
    mailboxForm.insertBefore(inputChar, inputMail);
  }
});

function characterValidation() {
  if (inputChar.value.length >= 1) {
    charValidationStyle = true;
    inputChar.classList.remove("invalid-input");
    invalidText.classList.remove("on");
    mailboxButton.classList.add("valid");
    inputChar.classList.add("valid");
  } else {
    charValidationStyle = false;
    mailboxButton.classList.remove("valid");
    inputChar.classList.remove("valid");
  }
}

inputChar.addEventListener("keyup", () => {
  characterValidation();
});

mailboxButton.addEventListener("click", () => {
  if (charValidationStyle == true) {
    character = inputChar.value;
    characterUrl = searchUrl + character;
    inputChar.classList.remove("invalid-input");
    invalidText.classList.remove("on");

    axios
      .get(characterUrl)
      .then((response) => {
        if (response.data.results.length == 0) {
          inputChar.classList.add("invalid-input");
          invalidText.style.top = "130px";
          invalidText.classList.add("on");
          invalidText.innerText = "Personagem inválido";
          character = "";
          characterUrl = "";
        } else {
          getChar();
          character = "";
          characterUrl = "";
          resultBox.style.visibility = "initial";
          resultBox.style.opacity = "1";
          mailbox.style.visibility = "hidden";
          mailbox.style.opacity = "0";
        }
      })
      .catch((error) => console.log(error));
  }
});

resultButton.addEventListener("click", () => {
  resultBox.style.visibility = "hidden";
  resultBox.style.opacity = "0";
  mailbox.style.visibility = "initial";
  mailbox.style.opacity = "1";
  document.querySelector(".char-name").innerText = "";
  const tags = document.querySelectorAll(".result-tag");
  for (tag of tags) {
    tag.remove();
  }
});
