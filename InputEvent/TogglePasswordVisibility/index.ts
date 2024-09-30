// select password input field and toggle button

const passwordInput: HTMLInputElement | null =
  document.querySelector("#passwordInput");

const toggleButton: HTMLButtonElement | null =
  document.querySelector("#togglePassword");

//   Function to toggle the password visibility

function togglePasswordVisibility() {
  if (!passwordInput) return;
  //   check the current type of the input field and toggle  between 'password" and "text"
  const currentType = passwordInput.type;
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
