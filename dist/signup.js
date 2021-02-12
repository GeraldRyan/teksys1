document
    .getElementById("submit-registration-btn")
    .addEventListener("click", (e) => {
    submitRegistration();
});
function submitRegistration() {
    let email = document.getElementById("email-input").value;
    let username = document.getElementById("username-input").value;
    let password = document.getElementById("password-input").value;
    let passwordConfirm = document.getElementById("repassword-input").value;
    let bReceiveNewsletter = document.getElementById("children-input").value;
    let registrationData = {
        email: email,
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
        bReceiveNewsletter: bReceiveNewsletter,
    };
    // EVIDENCE I'M GRABBING THE DATA. NOTE TO REVIEWER, THE CONSOLE CLEARS QUICKLY AS IT TRIES TO NAVIGATE TO LOCAL PATH. NOT SURE WHAT THAT MEANS, BUT CLICK CONSOLE SETTINGS> PRESERVE LOG AND YOU'LL SEE OBJECT. 
    console.log(registrationData);
}
