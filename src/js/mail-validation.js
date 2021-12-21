const mailbox = document.querySelector(".mailbox");
let invalid_text = document.querySelector(".invalid-text");
let mailValidation = null;
const input_mail = document.querySelector(".input-mail");
const mailbox_button = document.querySelector(".mailbox-button");

function inputMailFocused() {
  input_mail.classList.add("focused");
}

function inputMailFocusOut() {
  input_mail.classList.remove("focused");
}

function buttonFocused() {
  mailbox_button.classList.add("focused");
}

function buttonFocusOut() {
  mailbox_button.classList.remove("focused");
}

function emailValidation() {
  if (input_mail.value.length >= 3 && input_mail.value.indexOf("@") != -1) {
    mailValidation = true;
    mailbox_button.classList.add("valid");
    input_mail.classList.add("valid");
  } else {
    mailValidation = false;
    mailbox_button.classList.remove("valid");
    input_mail.classList.remove("valid");
  }

  if (mailValidation == false && input_mail.value.length > 0) {
    input_mail.style.border = "1px solid #C47768";
    invalid_text.classList.add("on");
    invalid_text.innerText = "E-mail inválido";
  } else {
    input_mail.style.border = "";
    invalid_text.classList.remove("on");
  }
}

input_mail.addEventListener("focusin", () => {
  inputMailFocused();
});

input_mail.addEventListener("focusout", () => {
  inputMailFocusOut();
});

input_mail.addEventListener("keyup", () => {
  emailValidation();
});

mailbox_button.addEventListener("focusin", () => {
  buttonFocused();
});

mailbox_button.addEventListener("focusout", () => {
  buttonFocusOut();
});

// PÁGINA DE DIGITAR O PERSONAGEM

const hello = document.querySelector(".hello");
const textArea = document.querySelector(".text-area");
const mailboxForm = document.querySelector(".mailbox-form");
const inputChar = document.createElement("input");
let charValidation = null;
let characterUrl = "https://swapi.py4e.com/api/people/?search=";
let character = null;
const resultBox = document.querySelector(".result-box");

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

function characterValidation() {
  if (inputChar.value.length >= 1) {
    charValidation = true;
    mailbox_button.classList.add("valid");
    inputChar.classList.add("valid");
  } else {
    charValidation = false;
    mailbox_button.classList.remove("valid");
    inputChar.classList.remove("valid");
  }
}

mailbox_button.addEventListener("click", () => {
  if (mailValidation == true) {
    mailbox_button.classList.remove("valid");
    hello.style.display = "none";
    input_mail.style.display = "none";
    textArea.innerHTML =
      "Agora, digite seu personagem favorito de <br> Star Wars";
    inputChar.setAttribute("type", "text");
    inputChar.setAttribute("placeholder", "Ex: Darth Vader");
    inputChar.classList.add("input-mail");
    mailboxForm.insertBefore(inputChar, input_mail);
  }
});

inputChar.addEventListener("keyup", () => {
  characterValidation();
});

mailbox_button.addEventListener("click", () => {
  if (charValidation == true) {
    character = inputChar.value;
    characterUrl += character;
    console.log(character);

    axios
      .get(characterUrl)
      .then((response) => {
        console.log(response);
        if (response.data.results.length == 0) {
          inputChar.style.border = "1px solid #C47768";
          invalid_text.style.top = "130px"
          invalid_text.classList.add("on");
          invalid_text.innerText = "Personagem inválido";
        } else {
          getChar();
          resultBox.style.display = "initial";
          mailbox.style.display = "none";
          console.log(characterUrl);
        }
      })
      .catch((error) => console.log(error));
  }
});