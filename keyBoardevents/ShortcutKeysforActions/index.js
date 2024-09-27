"use strict";
// Get my div element
const myDiv = document.querySelector("#myDiv");
console.log(myDiv);
// let create the shortcut function
function shortCut(e) {
    e.preventDefault();
    //   check fort Ctrl +B or Meta + B (Meta is for MacOs command key)
    if ((e.metaKey && e.key === "b") || (e.ctrlKey && e.key === "b")) {
        if ((myDiv === null || myDiv === void 0 ? void 0 : myDiv.style.backgroundColor) === "blue") {
            myDiv.style.backgroundColor = "lightgray";
        }
        else {
            if (myDiv) {
                myDiv.style.background = "blue";
            }
            console.log("Background color toggled");
        }
    }
    //   check for Ctrl + H or Meta + H (for hiding /showing element)
    if ((e.metaKey && e.key === "h") || (e.ctrlKey && e.key === "h")) {
        if ((myDiv === null || myDiv === void 0 ? void 0 : myDiv.style.display) === "none") {
            myDiv.style.display = "block";
        }
        else {
            if (myDiv) {
                myDiv.style.display = "none";
            }
            console.log("Element visibility toggled");
        }
    }
}
// listen to keyDown event on the whole page
document.addEventListener("keydown", shortCut);
