// store the interval  ID here
var actionInterval = null;
function startAction() {
    // Action to perform when the key is held down
    console.log("Action started ");
}
// Define the keydown handler
function handleKeyDown(e) {
    // if action is not already running ,start it
    if (actionInterval === null && e.key === "a") {
        startAction();
        // Repeat action every 500 millseconds
        actionInterval = window.setInterval(function () {
            console.log("Repeating  action ");
        }, 500);
    }
}
// Define keyup handler
function handleKeyUp(e) {
    if (actionInterval !== null && e.key === "a") {
        // stop repeating action
        clearInterval(actionInterval);
        // reset the interval ID
        console.log("Action stopped");
    }
}
// listen to the keydown and keyup event
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
