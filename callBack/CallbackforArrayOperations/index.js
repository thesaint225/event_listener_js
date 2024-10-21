"use strict";
const processArray = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(callback(arr[i]));
    }
};
const printData = (num) => {
    console.log(num * num);
};
processArray([1, 2, 3, 4, 5], printData);
