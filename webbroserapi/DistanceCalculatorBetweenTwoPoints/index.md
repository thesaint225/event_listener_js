3. Distance Calculator Between Two Points
   Goal: Calculate the distance between the user’s location and a specified point (e.g., a landmark).
   Instructions:
   Get the user’s latitude and longitude with the Geolocation API.
   Define another point with fixed coordinates (for example, a famous landmark).
   Use the Haversine formula or a distance calculation function to compute the distance between the two points.
   Display the distance in kilometers or miles.
   Hints:
   Use this Haversine formula in JavaScript:
   javascript
   Copier le code
   function calculateDistance(lat1, lon1, lat2, lon2) {
   const R = 6371; // Radius of Earth in kilometers
   const dLat = (lat2 - lat1) _ (Math.PI / 180);
   const dLon = (lon2 - lon1) _ (Math.PI / 180);
   const a =
   Math.sin(dLat / 2) _ Math.sin(dLat / 2) +
   Math.cos(lat1 _ (Math.PI / 180)) _ Math.cos(lat2 _ (Math.PI / 180)) _
   Math.sin(dLon / 2) _ Math.sin(dLon / 2);
   const c = 2 _ Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   return R _ c; // Distance in kilometers
   }
