// Get input field  and character count display elements
const textInput: HTMLInputElement | null = document.querySelector("#textInput");
const charCount: HTMLSpanElement | null = document.querySelector("#charCount");

// check if textInput exists

if (textInput) {
  const maxLength = textInput.maxLength;
  // Add an event listener to track input character
  textInput.addEventListener("input", function (e) {
    // get length of current input

    const target = e.target as HTMLInputElement;
    const currentLength = target.value.length;

    if (charCount) {
      charCount.textContent = (maxLength - currentLength).toString();
    }
  });
}
