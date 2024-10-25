var getUser = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve with a user object
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
};
var getUserId = function (userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(["Post 1 for the User ".concat(userId), "Post 2 for User ".concat(userId)]);
        }, 3000);
    });
};
getUser()
    .then(function (user) {
    console.log("user", user);
    return getUserId(user.id);
})
    .then(function (posts) {
    console.log("Posts", posts);
})
    .catch(function (error) {
    console.log(error);
});
