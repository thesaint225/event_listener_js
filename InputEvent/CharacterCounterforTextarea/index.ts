// select textarea and paragraph to display  character count
const textarea: HTMLTextAreaElement | null = document.querySelector("#message");
const charCount: HTMLParagraphElement | null =
  document.querySelector("#charCount");

//   set character limit

const maxLength = 150;

// Function to handle input  event and update the character count

function updateCharCount() {
  if (!textarea || !charCount) return;

  //   Get current length of input
  const currentLength = textarea.value.length;
  //   calculate remaining characters

  const remainingLength = maxLength - currentLength;

  //   Update CharCount paragraph
  charCount.textContent = `${remainingLength} characters remaining `;
  // Disable textarea if the limit is reached, using ternary operator
  textarea.disabled = remainingLength <= 0 ? true : false;
}

if (textarea) {
  textarea.addEventListener("input", updateCharCount);
}
