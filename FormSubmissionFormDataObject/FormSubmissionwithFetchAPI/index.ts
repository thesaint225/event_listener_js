const loginForm: HTMLFormElement | null = document.querySelector("#loginForm");

// create handle form submission  function

async function handleFormSubmission(e: SubmitEvent) {
  // prevent default behavior
  e.preventDefault();

  //   checks if loginForm exist if not do continue to run the code
  if (!loginForm) return;

  //   use FormData to capture form data

  const formData = new FormData(loginForm);
  try {
    // send form data using fetch as POST request
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      // POST request
      method: "POST",
      // pass the formData object as body
      body: formData,
    });
    // Get response in Json format
    const result = await response.json();

    // display response in console or page
    const responseElement: HTMLDivElement | null =
      document.querySelector("#response");
    if (responseElement) {
      responseElement.textContent = `Resource created with ID: ${result.id}`;
    }
  } catch (error) {
    console.log("Error submitting form:", error);
  }
  loginForm.reset();
}

// attach event listener
if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmission);
}
