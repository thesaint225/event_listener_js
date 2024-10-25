var fetchUserData = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // stimulate  50% chance  of failure
            if (Math.random() > 0.5) {
                resolve({ name: "henri", work: "soldier" });
            }
            else {
                reject("Failed to fetch user data ");
            }
        }, 2000);
    });
};
fetchUserData()
    .then(function (userData) {
    console.log("userData:", userData);
})
    .catch(function (error) {
    console.log("something went wrong ".concat(error));
});
