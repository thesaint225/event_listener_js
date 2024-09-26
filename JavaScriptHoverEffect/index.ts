// Get the div element by #id
const HoverDiv: HTMLDivElement | null = document.querySelector("#hoverDiv");

// Add mouseover listener to change the background color to blue
// first let check if HoverDiv exists

if (HoverDiv) {
  HoverDiv.addEventListener("mouseover", function () {
    HoverDiv.style.background = "blue";
  });
}
