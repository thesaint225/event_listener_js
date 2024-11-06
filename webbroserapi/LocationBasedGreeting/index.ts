// function display greeting message
function displayGreeting(city: string): void {
  const greetingEl = document.getElementById("greeting");
  if (!greetingEl) {
    return;
  } else {
    greetingEl.textContent = `Hello from ${city}`;
  }
}

// function to fetch city name using coordinates

async function getCityName(latitude: number, longitude: number): Promise<void> {
  const apiKey: string = "66cb4c9157b85b76f0b7a7d81efa3b1f";
  const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch the name of the city ");
    const data = await response.json();
    const cityName = data.name;
    displayGreeting(cityName);
  } catch (error) {
    console.error("Error fetching  city name", (error as Error).message);
  }
}

//  step 1 successCallback

const successCallback = (position: GeolocationPosition): void => {
  const latitude: number = position.coords.latitude;
  const longitude: number = position.coords.longitude;

  //   call the function to get the city

  getCityName(latitude, longitude);
};

// step 2

function errorCallback(error: GeolocationPositionError) {
  console.error("Error getting location", error.message);
}

// STEP 3
function geolocationOptions(): PositionOptions {
  return {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };
}

// Function to get the user's coordinates
function getCoordinates() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      geolocationOptions()
    );
  }
}

// call getCoordinate when the page loads

window.onload = getCoordinates;
