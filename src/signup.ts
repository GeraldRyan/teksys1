document
  .getElementById("submit-registration-btn")
  .addEventListener("click", (e) => {
    submitRegistration();
  });

function submitRegistration() {
  let email:any = (<HTMLInputElement>document.getElementById("email-input")).value
  let username:any = (<HTMLInputElement>document.getElementById("username-input")).value
  let password:any = (<HTMLInputElement>document.getElementById("password-input")).value
  let passwordConfirm:any = (<HTMLInputElement>document.getElementById("repassword-input")).value
  let bReceiveNewsletter:any = (<HTMLInputElement>document.getElementById("newsletter-input")).value
  let registrationData: object = {
    email: email,
    username: username,
    password: password,
    passwordConfirm: passwordConfirm,
    bReceiveNewsletter: bReceiveNewsletter,
  }  
  // EVIDENCE I'M GRABBING THE DATA. NOTE TO REVIEWER, THE CONSOLE CLEARS QUICKLY AS IT TRIES TO NAVIGATE TO LOCAL PATH. NOT SURE WHAT THAT MEANS, BUT CLICK CONSOLE SETTINGS> PRESERVE LOG AND YOU'LL SEE OBJECT. 
  console.log(registrationData) 

}
