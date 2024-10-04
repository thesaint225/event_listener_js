// select form and button
const dynamicForm: HTMLFormElement | null =
  document.querySelector("#dynamicForm");
const inputContainer: HTMLDivElement | null =
  document.querySelector("#inputContainer"); // This should target a div for input fields

const addPhone: HTMLButtonElement | null = document.querySelector("#addPhone");

// add new phone number  input field  function

function addPhoneNumberField() {
  if (!dynamicForm || !inputContainer || !inputContainer) return;
  const newField = document.createElement("div");
  newField.innerHTML = `<label for="phone">Phone Number:</label>
        <input type="text" name="phone[]" required>
        <button type="button" class="removePhone">Remove</button>
`;
  if (inputContainer) {
    inputContainer.appendChild(newField);
  }

  //   Add event listener  to remove button
  const removeButton = newField.querySelector(".removePhone");

  if (removeButton) {
    removeButton.addEventListener("click", () => {
      inputContainer.removeChild(newField);
    });
  }
}

// attach the event to the add button

if (addPhone) {
  addPhone.addEventListener("click", addPhoneNumberField);
}

async function handleSubmission(e: SubmitEvent) {
  e.preventDefault();
  // Ensure dynamicForm exist before
  if (!dynamicForm) return;
  // use FormData to capture all data
  const formData = new FormData(dynamicForm);
  //   log all from data
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:${value}`);
  }

  //   display response
  const responseElement: HTMLDivElement | null =
    document.querySelector("response");
  if (responseElement) {
    responseElement.textContent =
      "Form submitted! Check the console for values";
  }
}
