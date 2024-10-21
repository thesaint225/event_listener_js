"use strict";
const fetchData = (callback) => {
    setTimeout(() => {
        const data = [1, 2, 3, 4, 5, 6];
        callback(data);
    }, 2000);
};
const processData = (data) => {
    console.log("Fetched data", data);
};
fetchData(processData);
