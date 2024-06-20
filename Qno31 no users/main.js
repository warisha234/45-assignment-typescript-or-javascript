"use strict";
// no users : add an if else test to ex 
// 30 make sure that list of user is not empty
let usernames = ["fred", "eric", "admin", "john", "can"];
usernames = [];
if (usernames.length === 0) {
    console.log("Your array in empty we need to find some users");
}
else {
    usernames.forEach(onename => {
        if (onename === "admin") {
            console.log(`Hello ${onename}  would you like to see a status report?,`);
        }
        else {
            console.log(`Hello ${onename}, thank you for logging in again. `);
        }
    });
}
