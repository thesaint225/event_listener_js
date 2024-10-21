const downloadFile = (url: string, callback: () => void) => {
  console.log(`Downloading from ${url}`);
  callback();
};

const finished = () => {
  setTimeout(() => {
    console.log("done");
  }, 10000);
};

downloadFile("www.underTheDome", finished);
