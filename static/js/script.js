function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").value;
    const emailError = document.getElementById("email-error").value;
    const passwordError = document.getElementById("password-error").value;
    const checkedStatus = document.getElementById("checked-status").value;

    emailError.textContent = "";
    passwordError.textContent = "";
    checkedStatus.textContent = "";

    let isValid = true;

    if (email === "" || !email.include('@')) {
        emailError.textContent = "Please enter a valid Email";
        isValid = false;
    }

    if (password === "" || password.length < 8) {
        passwordError.textContent = "Please enter a password with at least 8 characters";
        isValid = false;
    }

    if (remember) checkedStatus.textContent = " Checked";
    else checkedStatus.textContent = " Unchecked";

    return isValid;
}