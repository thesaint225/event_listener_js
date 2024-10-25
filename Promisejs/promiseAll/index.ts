type Post = string;
type Input = string;
type Like = string;

const fetchPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post 1", "post 2", "post 3"]);
    }, 3000);
  });
};

const fetchComments = (): Promise<Input[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`comment 1`, `comment2`, `comment 3`]);
    }, 2000);
  });
};

const fetchLikes = (): Promise<Like[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`like 1`, `like 2`, `like 3`]);
    }, 1500);
  });
};

Promise.all([fetchPosts(), fetchComments(), fetchLikes()])
  .then((results) => {
    const [posts, inputs, likes] = results;
    console.log("Post", posts);
    console.log("input", inputs);
    console.log("likes", likes);
  })
  .catch((error) => {
    console.error(error);
  });
