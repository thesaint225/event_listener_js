var fetchPosts = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["post 1", "post 2", "post 3"]);
        }, 3000);
    });
};
var fetchComments = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["comment 1", "comment2", "comment 3"]);
        }, 2000);
    });
};
var fetchLikes = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["like 1", "like 2", "like 3"]);
        }, 1500);
    });
};
Promise.all([fetchPosts(), fetchComments(), fetchLikes()])
    .then(function (results) {
    var posts = results[0], inputs = results[1], likes = results[2];
    console.log("Post", posts);
    console.log("input", inputs);
    console.log("likes", likes);
})
    .catch(function (error) {
    console.error(error);
});
