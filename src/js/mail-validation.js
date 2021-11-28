const input_mail = document.querySelector(".input-mail")
const invalid_mail = document.querySelector(".invalid-mail")
const mailbox_button = document.querySelector(".mailbox-button")

function validarEmail() {
  let validation = null

  if (input_mail.value.length >= 3 && input_mail.value.indexOf("@") != -1) {
    validation = true
    mailbox_button.classList.add("valid")
  } else {
    validation = false
    mailbox_button.classList.remove("valid")
  }

  if (validation == false && input_mail.value.length > 0) {
    input_mail.style.border = "1px solid #C47768"
    invalid_mail.classList.add("on")
  } else {
    input_mail.style.border = ""
    invalid_mail.classList.remove("on")
  }
}

input_mail.addEventListener("keyup", () => {
  validarEmail()
})