const locationElement = document.getElementById(
  "location"
) as HTMLParagraphElement;
const errorElement: HTMLParagraphElement | null = document.getElementById(
  "error"
) as HTMLParagraphElement;

const showMap = (latitude: number, longitude: number) => {
  const mapIframeElement = document.getElementById("map") as HTMLIFrameElement;
  mapIframeElement.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyC8ViOr_if-UrDvMvStBSRzFZ0LNfOP5Ac
&q=${latitude},${longitude}`;
  mapIframeElement.style.display = "block";
};

const handleSuccess = (position: GeolocationPosition) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  if (locationElement) {
    locationElement.textContent = `latitude:${latitude},longitude:${longitude}`;
  }

  // Display map based on location
  showMap(latitude, longitude);
};

const handleError = (error: GeolocationPositionError) => {
  let message: string;
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
} else {
  errorElement.textContent = "Geolocation is not supported by your browser.";
}
