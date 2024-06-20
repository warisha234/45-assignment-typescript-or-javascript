"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//original oder
let countries = ["Canada", "America", "Germany", "United Kingdom", "France"];
console.log("origional oder", countries);
// alphabetic oder without modifying
console.log("Alphabetical oder :", [...countries].sort());
//checking original oder
console.log("orignal oder still same :", countries);
//reverse alphabetic oder without modifying
console.log(" reverse Alphabetical oder: ", [...countries].reverse());
//checking original oder
console.log("orignal oder still same: ", countries);
//reverse the oder original array change now
console.log(" reverse original oder: ", countries.reverse());
//print the array to show its back to its original order
console.log("Back to original oder: ", countries.reverse());
//oder has been changed in alphabetical order
console.log("sorted in alphabetical order :", countries.sort());
//print the array to show its back to its original order
console.log(" reverse original oder: ", countries.reverse());
