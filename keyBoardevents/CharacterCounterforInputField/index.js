// Get input field  and character count display elements
var textInput = document.querySelector("#textInput");
var charCount = document.querySelector("#charCount");
// check if textInput exists
if (textInput) {
    var maxLength_1 = textInput.maxLength;
    // Add an event listener to track input character
    textInput.addEventListener("input", function (e) {
        // get length of current input
        var target = e.target;
        var currentLength = target.value.length;
        if (charCount) {
            charCount.textContent = (maxLength_1 - currentLength).toString();
        }
    });
}
