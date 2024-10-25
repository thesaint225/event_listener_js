// Define user type for better type  safety
type User = {
  id: number;
  name: string;
};
const getUser = (): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve with a user object
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
};

const getUserId = (userId: number): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([`Post 1 for the User ${userId}`, `Post 2 for User ${userId}`]);
    }, 3000);
  });
};

getUser()
  .then((user) => {
    console.log("user", user);
    return getUserId(user.id);
  })
  .then((posts) => {
    console.log("Posts", posts);
  })
  .catch((error) => {
    console.log(error);
  });
