const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // stimulate  50% chance  of failure
      if (Math.random() > 0.5) {
        resolve({ name: "henri", work: "soldier" });
      } else {
        reject("Failed to fetch user data ");
      }
    }, 2000);
  });
};

fetchUserData()
  .then((userData) => {
    console.log("userData:", userData);
  })
  .catch((error) => {
    console.log(`something went wrong ${error}`);
  });
