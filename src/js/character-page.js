const hello = document.querySelector(".hello");
const textArea = document.querySelector(".text-area");
const formboxDiv = document.querySelector(".formbox-div");
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

formboxButton.addEventListener("click", () => {
  if (mailValidation == true) {
    logo.style.opacity = "0";
    logo.style.visibility = "hidden";
    formboxButton.classList.remove("valid");
    hello.style.display = "none";
    inputMail.style.display = "none";
    textArea.innerHTML =
      "Agora, digite seu personagem favorito de <br> Star Wars";
    inputChar.setAttribute("type", "text");
    inputChar.setAttribute("placeholder", "Ex: Darth Vader");
    inputChar.classList.add("input-mail");
    formboxDiv.insertBefore(inputChar, inputMail);
  }
});

function characterValidation() {
  if (inputChar.value.length >= 1) {
    charValidationStyle = true;
    inputChar.classList.remove("invalid-input");
    invalidText.classList.remove("on");
    formboxButton.classList.add("valid");
    inputChar.classList.add("valid");
  } else {
    charValidationStyle = false;
    formboxButton.classList.remove("valid");
    inputChar.classList.remove("valid");
  }
}

inputChar.addEventListener("keyup", () => {
  characterValidation();
});
