Chaining Promises
Write two functions:

getUser() returns a Promise that resolves to a user object (e.g., { id: 1, name: 'Alice' }).
getUserPosts(userId) takes a userId and returns a Promise that resolves to an array of post titles.
Chain these two Promises to first get the user and then fetch their posts based on the user's id.
