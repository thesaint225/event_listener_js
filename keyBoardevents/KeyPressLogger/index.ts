// Get  output  element
const outputDiv: HTMLDivElement | null = document.querySelector("#output");

//Add event listener for keydown
document.addEventListener("keydown", function (e): void {
  // log  key pressed to console
  console.log(`key pressed:${e.key}`);

  // Display  key pressed on the webpage
  // First check output Element exists
  if (outputDiv) {
    outputDiv.textContent = `you pressed ${e.key}`;
  }
});
