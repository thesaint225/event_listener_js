// select textarea and paragraph to display  character count
var textarea = document.querySelector("#message");
var charCount = document.querySelector("#charCount");
//   set character limit
var maxLength = 150;
// Function to handle input  event and update the character count
function updateCharCount() {
    if (!textarea || !charCount)
        return;
    //   Get current length of input
    var currentLength = textarea.value.length;
    //   calculate remaining characters
    var remainingLength = maxLength - currentLength;
    //   Update CharCount paragraph
    charCount.textContent = "".concat(remainingLength, " characters remaining ");
    // Disable textarea if the limit is reached, using ternary operator
    textarea.disabled = remainingLength <= 0 ? true : false;
}
if (textarea) {
    textarea.addEventListener("input", updateCharCount);
}
