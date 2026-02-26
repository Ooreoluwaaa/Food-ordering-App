const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";

  if (!emailInput.checkValidity()) {
    emailError.textContent = emailInput.validationMessage;
  }

  if (!passwordInput.checkValidity()) {
    passwordError.textContent = passwordInput.validationMessage;
  }

  if (emailInput.checkValidity() && passwordInput.checkValidity()) {
    alert("Login successful!");
  }
});
