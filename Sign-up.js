const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const agree = document.getElementById("agree");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const agreeError = document.getElementById("agreeError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  agreeError.textContent = "";

  let isValid = true;

  if (!email.checkValidity()) {
    emailError.textContent = email.validationMessage;
    isValid = false;
  }

  const phoneValue = phone.value;

  if (phoneValue.length < 10 || phoneValue.length > 11 || isNaN(phoneValue)) {
    phoneError.textContent = "Enter a valid phone number";
    isValid = false;
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (!agree.checked) {
    agreeError.textContent = "You must agree to the terms";
    isValid = false;
  }

  if (isValid) {
    alert("Account created successfully!");
    form.reset();
  }
});
