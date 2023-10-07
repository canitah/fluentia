let signupForm = document.querySelector("#signupForm"),
  emailField = signupForm.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = signupForm.querySelector(".password-field"),
  passInput = passField.querySelector(".password");

// Hide and show password
let eyeIcon=document.querySelector('.fa-eye-slash')

  eyeIcon.addEventListener("click", () => {
    if (passInput.type === "password") {
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
      return (passInput.type = "text");
    }
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    passInput.type = "password";
  });
  
// Email Validtion
function validateEmail() {
  let emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    emailInput.style.borderColor = "#d93025";
    return emailField.classList.add("invalid"); 
  }
  emailField.classList.remove("invalid"); 
  emailInput.style.borderColor = "#7d2ae8";  
}

  // Password Validation
function validatePass() {
  let passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  if (!passInput.value.match(passPattern)) {
    passInput.style.borderColor = "#d93025";
    return passField.classList.add("invalid"); 
  }
  passField.classList.remove("invalid"); 
  passInput.style.borderColor = "#7d2ae8";  
}

// Calling Funtion on Form Sumbit
signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  validateEmail();
  validatePass();

  //calling function on key up
  emailInput.addEventListener("keyup", validateEmail);
  passInput.addEventListener("keyup", validatePass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") 
    ) {
    location.href = signupForm.getAttribute("action");
  }
});



