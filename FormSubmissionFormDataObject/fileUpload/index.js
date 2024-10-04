// Get form element and file  into div
var fileUploadForm = document.querySelector("#fileUploadForm");
var fileInfo = document.querySelector("fileInfo");
function handleFileUpload(e) {
    e.preventDefault();
    //   Ensure form exists
    if (!fileUploadForm)
        return;
    //  get the file input element
    var fileInput = document.querySelector("#fileInput");
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        alert("please select  a file ");
        return;
    }
    //   Get selected file  from input
    var file = fileInput.files[0];
    //  Create formData and append file
    var formData = new FormData();
    formData.append("image", file);
    //   Display files details
    var fileName = file.name;
    var fileSize = (file.size / 1024).toFixed(2) + "kb";
    //   display on the page
    if (fileInfo) {
        fileInfo.innerHTML = "<p><strong>File Name:</strong> ".concat(fileName, "</p>\n                        <p><strong>File Size:</strong> ").concat(fileSize, " KB</p>");
    }
}
if (fileUploadForm) {
    fileUploadForm.addEventListener("submit", handleFileUpload);
}
