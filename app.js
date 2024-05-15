const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the login button
    const loginButton = document.querySelector('.sign-in-form .btn');
  
    // Add event listener to the login button
    loginButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect to the desired HTML page
      window.location.href = 'calendar.html'; // Replace 'path_to_your_html_file.html' with the actual path to your HTML file
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Get the login button
    const loginButton = document.querySelector('.sign-in-form .btn');
  
    // Add event listener to the login button
    loginButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect to the desired HTML page
      window.location.href = 'calendar.html'; // Replace 'login.html' with the path to your login HTML file
    });
  
    // Get the sign-up button
    const signUpButton = document.querySelector('.sign-up-form .btn');
  
    // Add event listener to the sign-up button
    signUpButton.addEventListener('click', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Redirect to the desired HTML page
      window.location.href = 'calendar.html'; // Replace 'signup.html' with the path to your sign-up HTML file
    });
  });
  