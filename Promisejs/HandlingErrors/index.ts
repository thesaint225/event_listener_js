const getWeather = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("data successfully retrieved ");
      } else {
        reject("can not be find ");
      }
    }, 3000);
  });
};
getWeather()
  .then((data) => {
    console.log(`print:${data}`);
  })
  .catch((error) => {
    console.error(` find ${error}`);
  });
