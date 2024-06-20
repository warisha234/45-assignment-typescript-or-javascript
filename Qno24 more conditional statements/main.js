"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//.............................................
// Tests for equality and inequality with strings
let schoolName1 = "GIAIC";
console.log("schoolName1 is equal to GIAIC");
console.log(schoolName1 == "GIAIC");
console.log("\nschoolName1 is not equal to GIAIC");
console.log(schoolName1 != "GIAIC");
// • Tests using the lower case function
let uppercaseApple = "APPLE";
console.log("\nIts APPLE is equal to apple after converting to lower case");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIts APPLE is  not equal to apple after converting to lower case");
console.log(uppercaseApple.toLowerCase() != "apple");
// • Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to
let num1 = 15;
let num2 = 20;
// perform == or !=
if (num1 === num2) {
    console.log(` ${num1} is equal to ${num2} `);
}
else {
    console.log(`false condition ${num1} is not equal to ${num2}`);
} // false
if (num1 != num2) {
    console.log(`true condition ${num1} is not equal to ${num2}`);
}
else {
    console.log("both are equal");
}
// perform > < >= <=
if (num1 > num2) {
    console.log(`${num1} greater than ${num2}`);
}
else {
    console.log(` no ${num1}is not  greater than ${num2}`);
} // false
if (num1 < num2) {
    console.log(`${num1} is  less than ${num2}`);
}
else {
    console.log(` no ${num1}is not  less than ${num2}`);
} //true
if (num1 >= num2) {
    console.log(`${num1} greater than equal ${num2}`);
}
else {
    console.log(` no ${num1}is not  greater than equal ${num2}`);
} //false
if (num1 <= num2) {
    console.log(`${num1} less than equal ${num2}`);
}
else {
    console.log(` no ${num1}is not  less than ${num2}`);
} // true
// • Tests using "and" and "or" operators
//&&
let a = 6;
let b = 5;
if (a > b && a == 6) {
    console.log("yeah its true");
}
else {
    console.log("false");
} // true
if (a > b && a == b) {
    console.log("yeah its true");
}
else {
    console.log("false");
} // false
// ||
if (a > b || a == b) {
    console.log("yeah its true");
}
else {
    console.log("false");
} // true
if (a < b && a == b) {
    console.log("yeah its true");
}
else {
    console.log("false");
} // false
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Checking items in array 
let colors = ["red", "blue", "green"];
if (colors[1] == "blue") {
    console.log("this color name is in array");
}
else {
    console.log("this color is not is in array");
} // true 
if (colors[1] == "red") {
    console.log("this color is not is in array");
}
else {
    console.log("this color  is in array");
} // false
// checking item not in array 
if (!(colors[1] == "red")) {
    console.log("this color name is in array");
}
else {
    console.log("this color is not is in array");
} // false
if (!(colors[1] == "white")) {
    console.log("this color is not is in array");
}
else {
    console.log("this color  is in array");
} // true
