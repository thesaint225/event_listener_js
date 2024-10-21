const fetchData = (callback: (data: number[]) => void) => {
  setTimeout(() => {
    const data: number[] = [1, 2, 3, 4, 5, 6];
    callback(data);
  }, 2000);
};

const processData = (data: number[]) => {
  console.log("Fetched data", data);
};

fetchData(processData);
