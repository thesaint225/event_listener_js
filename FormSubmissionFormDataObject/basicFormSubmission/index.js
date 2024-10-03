var myForm = document.querySelector("#myForm");
function submissionForm(e) {
    // prevent default form submission behavior
    e.preventDefault();
    //   ensure "myForm" exists and  is of correct type
    if (!myForm)
        return;
    var formData = new FormData(this);
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
}
if (myForm) {
    myForm.addEventListener("submit", submissionForm);
}
