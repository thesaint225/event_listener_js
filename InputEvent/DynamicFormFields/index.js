// select the input container and buttons
var inputContainer = document.querySelector("#inputContainer");
var addButton = document.querySelector("#addButton");
var removeButton = document.querySelector("#removeButton");
//   Function to add a new input field
function addInputField() {
    // end the function if you can find input container
    if (!inputContainer)
        return;
    var newInput = document.createElement("input");
    console.log(newInput);
    newInput.type = "text";
    newInput.className = "input-field";
    newInput.placeholder = "Enter value";
    inputContainer.appendChild(newInput);
}
// Function to remove last field
function removeInputField() {
    if (!inputContainer)
        return;
    var inputFields = inputContainer.getElementsByClassName("input-field");
    //   only remove last input field if there is least one
    if (inputFields.length > 0) {
        inputContainer.removeChild(inputFields[inputFields.length - 1]);
    }
}
// Add event listeners to button
if (addButton) {
    addButton.addEventListener("click", addInputField);
}
if (removeButton) {
    removeButton.addEventListener("click", removeInputField);
}
