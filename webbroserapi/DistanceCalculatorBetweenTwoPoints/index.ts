// Target coordinates (e.g., a landmark)
const targetLat = 5.5544;
const targetLon = 0.2026;

// Main function to start distance calculation
function startDistanceCalculation() {
  getDistanceToTarget(targetLat, targetLon);
}

// Function to get user's location
function getUserLocation(
  onSuccess: (position: GeolocationPosition) => void,
  onError: (error: GeolocationPositionError) => void
): void {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// Function to handle location errors
function handleLocationError(error: GeolocationPositionError): void {
  let message: string;

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
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in kilometers

  const toRadians = (angle: number) => angle * (Math.PI / 180);
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}

// Main function to get the user's location and calculate distance
function getDistanceToTarget(targetLat: number, targetLon: number): void {
  const onSuccess = (position: GeolocationPosition) => {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    // Calculate and display distance
    const distance = calculateDistance(userLat, userLon, targetLat, targetLon);
    console.log(
      `The distance to the target is ${distance.toFixed(2)} kilometers.`
    );

    // Optionally, update the DOM to display the distance
    const distanceElement = document.getElementById("distance");
    if (distanceElement) {
      distanceElement.textContent = `Distance to target: ${distance.toFixed(
        2
      )} km`;
    }
  };

  // Call getUserLocation with onSuccess and handleLocationError as callbacks
  getUserLocation(onSuccess, handleLocationError);
}
