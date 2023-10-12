const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");
const createAccountButton = document.querySelector(".create-acc__btn");
const errorText = document.querySelector(".error-text");

createAccountButton.addEventListener("click", () => {
  if (passwordField.value !== confirmPasswordField.value) {
    passwordField.classList.remove("field-box");
    passwordField.classList.add("error");

    confirmPasswordField.classList.remove("field-box");
    confirmPasswordField.classList.add("error");

    errorText.classList.remove("hidden");
  }
});
