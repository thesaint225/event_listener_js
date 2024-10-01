// Get the input  fields and  submit  button

const nameInput: HTMLInputElement | null = document.querySelector("#name");
const emailInput: HTMLInputElement | null = document.querySelector("#email");
const submitButtonElement: HTMLButtonElement | null =
  document.querySelector("#submitButton");

// function to check the input fields

function checkInput() {
  if (!nameInput || !emailInput) return;
  if (!submitButtonElement) return;

  //  enable the submit button only if both fields  have value
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.disabled = true;
  }
}

if (nameInput) {
  nameInput.addEventListener("input", checkInput);
}

if (emailInput) {
  emailInput.addEventListener("input", checkInput);
}
