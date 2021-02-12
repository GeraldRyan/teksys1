document
  .getElementById("submit-registration-btn")
  .addEventListener("click", (e) => {
    submitRegistration();
  });

function submitRegistration() {
  let email:any = (<HTMLInputElement>document.getElementById("email-input")).value.trim()
  let username:any = (<HTMLInputElement>document.getElementById("username-input")).value.trim()
  let password:any = (<HTMLInputElement>document.getElementById("password-input")).value.trim()
  let passwordConfirm:any = (<HTMLInputElement>document.getElementById("repassword-input")).value.trim()
  let bReceiveNewsletter:any = (<HTMLInputElement>document.getElementById("newsletter-input")).value.trim()
  let registrationData: object = {
    email: email,
    username: username,
    password: password,
    passwordConfirm: passwordConfirm,
    bReceiveNewsletter: bReceiveNewsletter,
  }  

  let emailIsValid: boolean = /@/.test(email) && /\./.test(email) && !/\s/.test(email)
  if (!emailIsValid){
      alert("Please enter a valid email")
      return
  }
  if (password != passwordConfirm){
    alert(`Passwords don't match. Please re-enter your data`)
  }
  // EVIDENCE I'M GRABBING THE DATA. NOTE TO REVIEWER, THE CONSOLE CLEARS QUICKLY AS IT TRIES TO NAVIGATE TO LOCAL PATH. NOT SURE WHAT THAT MEANS, BUT CLICK CONSOLE SETTINGS> PRESERVE LOG AND YOU'LL SEE OBJECT. 
  console.log(`Registration Data: ${registrationData}`) 

}


///https://emailregex.com/
let strongEmailAddressPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/