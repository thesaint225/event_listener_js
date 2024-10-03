const myForm: HTMLFormElement | null = document.querySelector("#myForm");

function submissionForm(this: HTMLFormElement, e: SubmitEvent) {
  // prevent default form submission behavior
  e.preventDefault();

  //   ensure "myForm" exists and  is of correct type
  if (!myForm) return;

  const formData = new FormData(this as HTMLFormElement);
  console.log("Name:", formData.get("name"));
  console.log("Email:", formData.get("email"));
}

if (myForm) {
  myForm.addEventListener("submit", submissionForm);
}
