var locationElement = document.getElementById("location");
var errorElement = document.getElementById("error");
var showMap = function (latitude, longitude) {
    var mapIframeElement = document.getElementById("map");
    mapIframeElement.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC8ViOr_if-UrDvMvStBSRzFZ0LNfOP5Ac\n&q=".concat(latitude, ",").concat(longitude);
    mapIframeElement.style.display = "block";
};
var handleSuccess = function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    if (locationElement) {
        locationElement.textContent = "latitude:".concat(latitude, ",longitude:").concat(longitude);
    }
    // Display map based on location
    showMap(latitude, longitude);
};
var handleError = function (error) {
    var message;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
        case error.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
        default:
            message = "An unknown error occurred.";
            break;
    }
    console.log(message);
};
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}
else {
    errorElement.textContent = "Geolocation is not supported by your browser.";
}
