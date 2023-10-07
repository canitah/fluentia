let loginForm = document.querySelector("#loginForm");
  loginEmailField = loginForm.querySelector(".email-field"),
  loginEmailInput = loginEmailField.querySelector(".email"),
  loginPassField = loginForm.querySelector(".password-field"),
  loginPassInput = loginPassField.querySelector(".password");


// Hide and show password
let eyeIcon=document.querySelector('.fa-eye-slash')

  eyeIcon.addEventListener("click", () => {
    console.log(loginPassInput) 
    if (loginPassInput.type === "password") {
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
      return (loginPassInput.type = "text");
    }
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    loginPassInput.type = "password";
  });
   

// Email Confirmation
function confirmEmail() {
  let correctEmail = 'helloworld123@gmail.com';
  if (!loginEmailInput.value.match(correctEmail)) {
    loginEmailInput.style.borderColor = "#d93025";
    return loginEmailField.classList.add("invalid"); 
  }
  loginEmailField.classList.remove("invalid"); 
  loginEmailInput.style.borderColor = "#7d2ae8";  
}

  // Password Confirmation
function confirmPass() {
  let correctPass = 'hello.World123';
  if (!loginPassInput.value.match(correctPass)) {
    loginPassInput.style.borderColor = "#d93025";
    return loginPassField.classList.add("invalid"); 
}
loginPassField.classList.remove("invalid"); 
loginPassInput.style.borderColor = "#7d2ae8";

}


// Calling Funtion on Form Sumbit
loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        confirmEmail();
        confirmPass();

        //calling function on key up
        loginEmailInput.addEventListener("keyup", confirmEmail);
        loginPassInput.addEventListener("keyup", confirmPass);

        if (
            !loginEmailField.classList.contains("invalid") &&
            !loginPassField.classList.contains("invalid") 
            ) {
            location.href = loginForm.getAttribute("action");
        }
});
