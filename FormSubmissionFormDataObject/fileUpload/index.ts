// Get form element and file  into div
const fileUploadForm: HTMLFormElement | null =
  document.querySelector("#fileUploadForm");
const fileInfo: HTMLDivElement | null = document.querySelector("fileInfo");

function handleFileUpload(this: HTMLFormElement, e: SubmitEvent) {
  e.preventDefault();

  //   Ensure form exists
  if (!fileUploadForm) return;

  //  get the file input element

  const fileInput: HTMLInputElement | null =
    document.querySelector("#fileInput");
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    alert("please select  a file ");
    return;
  }

  //   Get selected file  from input
  const file = fileInput.files[0];

  //  Create formData and append file
  const formData = new FormData();
  formData.append("image", file);

  //   Display files details
  const fileName = file.name;
  const fileSize = (file.size / 1024).toFixed(2) + "kb";

  //   display on the page
  if (fileInfo) {
    fileInfo.innerHTML = `<p><strong>File Name:</strong> ${fileName}</p>
                        <p><strong>File Size:</strong> ${fileSize} KB</p>`;
  }
}

if (fileUploadForm) {
  fileUploadForm.addEventListener("submit", handleFileUpload);
}
