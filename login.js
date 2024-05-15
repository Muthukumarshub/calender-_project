const signUpDiv = document.getElementById("signup");
const signInDiv = document.getElementById("signIn");
const registerLink = document.getElementById("registerLink");
const signInLink = document.querySelector(".register-link a:first-child");
function showSignUp() {
  signUpDiv.style.display = "block";
  signInDiv.style.display = "none";
}
function showSignIn() {
  signUpDiv.style.display = "none";
  signInDiv.style.display = "block";
}
registerLink.addEventListener("click", showSignUp);
signInLink.addEventListener("click", showSignIn);