"use strict";
const doHomeWork = (subject, callback) => {
    console.log(`starting my homeWork on ${subject}`);
    setTimeout(() => {
        console.log(`almost done  my homeWork on on ${subject}`);
        callback();
    }, 2000);
};
const done = () => {
    console.log("iam done with  my work  ");
};
const almostDone = () => {
    console.log(`iam almost done with it `);
};
doHomeWork("math", done);
