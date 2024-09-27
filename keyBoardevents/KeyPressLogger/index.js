"use strict";
// Get  output  element
const outputDiv = document.querySelector("#output");
//Add event listener for keydown
document.addEventListener("keydown", function (e) {
    // log  key pressed to console
    console.log(`key pressed:${e.key}`);
    // Display  key pressed on the webpage
    // First check output Element exists
    if (outputDiv) {
        outputDiv.textContent = `you pressed ${e.key}`;
    }
});
