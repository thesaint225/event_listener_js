const fetchUserInfo = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("User data successfully retrieved");
      } else {
        reject("User data could not be retrieved");
      }
    }, 1000);
  });
};

const getUserInfo = async () => {
  try {
    const data = fetchUserInfo();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getUserInfo();
