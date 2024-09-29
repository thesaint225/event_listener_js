// Get input field
var numberInput = document.querySelector("#numberInput");
console.log(numberInput);
var errorMessage = document.querySelector("#errorMessage");
// Function to check if input is valid number
function validInput() {
    // early return if no input element
    if (!numberInput)
        return;
    var value = numberInput.value;
    // regular expression to allow number only
    var isValidNumber = /^[0-9]*$/.test(value);
    // clear invalid input if non-numeric charcters are typed
    numberInput.value = value.replace(/[^0-9]/g, "");
    // toggle error message based on validity
    if (errorMessage) {
        errorMessage.style.display = isValidNumber ? "none" : "block";
        errorMessage.textContent = isValidNumber ? "" : "please enter number only";
    }
}
//
if (numberInput) {
    numberInput.addEventListener("input", validInput);
}
