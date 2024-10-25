var getWeather = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.5) {
                resolve("data successfully retrieved ");
            }
            else {
                reject("can not be find ");
            }
        }, 3000);
    });
};
getWeather()
    .then(function (data) {
    console.log("print:".concat(data));
})
    .catch(function (error) {
    console.error(" find ".concat(error));
});
