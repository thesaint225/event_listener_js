import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

// Define the interface for location
interface Location {
  lat: number;
  lng: number;
  name: string;
}

// Create an array of locations
const locations: Location[] = [
  {
    lat: 5.5772,
    lng: 0.1155,
    name: "Teshie Camp",
  },
  {
    lat: 5.6037,
    lng: -0.187,
    name: "Accra Central",
  },
];

// Initialize map and set it to the first location
const map = L.map("map").setView([locations[0].lat, locations[0].lng], 13);

// Add the tile layer (map style)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add markers for all locations
locations.forEach((location) => {
  L.marker([location.lat, location.lng])
    .addTo(map)
    .bindPopup(location.name)
    .openPopup();
});
