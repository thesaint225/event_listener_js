// Target coordinates (e.g., a landmark)
var targetLat = 5.5544;
var targetLon = 0.2026;
// Main function to start distance calculation
function startDistanceCalculation() {
    getDistanceToTarget(targetLat, targetLon);
}
// Function to get user's location
function getUserLocation(onSuccess, onError) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else {
        console.log("Geolocation is not supported by this browser.");
    }
}
// Function to handle location errors
function handleLocationError(error) {
    var message;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
        default:
            message = "An unknown error occurred.";
            break;
    }
    console.log(message);
}
// Function to calculate the distance using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the Earth in kilometers
    var toRadians = function (angle) { return angle * (Math.PI / 180); };
    var dLat = toRadians(lat2 - lat1);
    var dLon = toRadians(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
}
// Main function to get the user's location and calculate distance
function getDistanceToTarget(targetLat, targetLon) {
    var onSuccess = function (position) {
        var userLat = position.coords.latitude;
        var userLon = position.coords.longitude;
        // Calculate and display distance
        var distance = calculateDistance(userLat, userLon, targetLat, targetLon);
        console.log("The distance to the target is ".concat(distance.toFixed(2), " kilometers."));
        // Optionally, update the DOM to display the distance
        var distanceElement = document.getElementById("distance");
        if (distanceElement) {
            distanceElement.textContent = "Distance to target: ".concat(distance.toFixed(2), " km");
        }
    };
    // Call getUserLocation with onSuccess and handleLocationError as callbacks
    getUserLocation(onSuccess, handleLocationError);
}
