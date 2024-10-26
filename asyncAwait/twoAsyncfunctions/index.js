"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const FirstUserInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const users = yield res.json();
        // log first user
        const firstUserEmail = users[0].email;
        return firstUserEmail;
    }
    catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Re-throw the error so the calling function knows there was an issue
    }
});
const displayFirstUserEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = yield FirstUserInfo();
        console.log(`The email of the first user is : ${email}`);
    }
    catch (error) {
        console.error("Could not display user email:", error);
    }
});
displayFirstUserEmail();
