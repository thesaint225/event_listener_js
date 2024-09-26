const form: HTMLFormElement | null = document.querySelector("#myForm");
const nameInput: HTMLInputElement | null = document.querySelector("#name");

// let check if nameInput exists

if (nameInput) {
  // Add an event listener for  keydown event on the input field
  nameInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      // prevent form from being submitted
      e.preventDefault();
      nameInput.value = "";

      console.log("form submission prevented . Enter key was pressed");
    }
  });
}

// optional

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("form submitted via button");

  if (nameInput) {
    nameInput.value = "";
  }
});
