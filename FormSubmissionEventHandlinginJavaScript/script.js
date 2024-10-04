"use strict";
const form = document.querySelector("#myForm");
const input = document.querySelector("#name");
// Function to add event listener to form
function handleFormSubmit(e) {
    e.preventDefault();
    //   Check if input element exists
    if (input) {
        // Clear input field
        input.value = "";
    }
    // Check if form element exists
    if (form) {
        console.log("Form submitted");
    }
}
// call function to add event listener
document.addEventListener("submit", handleFormSubmit);
