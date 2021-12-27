formboxButton.addEventListener("click", () => {
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
          formbox.style.visibility = "hidden";
          formbox.style.opacity = "0";
        }
      })
      .catch((error) => console.log(error));
  }
});

resultButton.addEventListener("click", () => {
  resultBox.style.visibility = "hidden";
  resultBox.style.opacity = "0";
  formbox.style.visibility = "initial";
  formbox.style.opacity = "1";
  document.querySelector(".char-name").innerText = "";
  const tags = document.querySelectorAll(".result-tag");
  for (tag of tags) {
    tag.remove();
  }
});
