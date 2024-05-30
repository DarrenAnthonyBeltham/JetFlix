function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var birthdate = document.getElementById("birthdate").value;
    var termsCheckbox = document.getElementById("termsCheckbox").checked;

    if (username === "" || password === "" || confirmPassword === "" || birthdate === "" || !termsCheckbox) {
        document.getElementById("error").innerHTML = "Please fill in all fields and accept the terms and conditions.";
        return false;
    }

    if (password !== confirmPassword) {
        document.getElementById("error").innerHTML = "Passwords do not match.";
        return false;
    }
    return true;
}
