// select password input field and toggle button
var passwordInput = document.querySelector("#passwordInput");
var toggleButton = document.querySelector("#togglePassword");
//   Function to toggle the password visibility
function togglePasswordVisibility() {
    if (!passwordInput)
        return;
    //   check the current type of the input field and toggle  between 'password" and "text"
    var currentType = passwordInput.type;
    passwordInput.type = currentType === "password" ? "text" : "password";
    //   update button text based on visibility
    if (toggleButton) {
        toggleButton.textContent =
            currentType === "Password" ? "Hide Password" : "Show password";
    }
}
// Add event listener to the button
if (toggleButton) {
    toggleButton.addEventListener("click", function (e) {
        e.preventDefault();
        togglePasswordVisibility();
    });
}
