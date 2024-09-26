// Get the div element by #id
var hoverDiv = document.querySelector("#hoverDiv");
// Check if hoverDiv exists
if (hoverDiv) {
    // Add mouseover listener to change the background color to blue
    hoverDiv.addEventListener("mouseover", function () {
        hoverDiv.style.background = "blue";
    });
    // Add mouseout event listener to change background color back to lightgray
    hoverDiv.addEventListener("mouseout", function () {
        hoverDiv.style.background = "lightgray";
    });
}
