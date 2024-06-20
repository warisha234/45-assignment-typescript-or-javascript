"use strict";
// let guestList : string[] = ['Warisha' , 'Mirub' , 'Abeera'];
// // for(let i=0; i<guestList.length; i++){
// //     console.log('Assalam O Akaikum dear...' + guestList[i] + ',\n Would you like to join us for dinner tonight? \n\n');
// // }
// let absentPerson : string = 'Mirub';
// let newGuest : string = 'ashi';
// guestList[1] = newGuest;
// for(let i=0; i<guestList.length; i++){ 
//      console.log('Assalam O Akaikum dear...' + guestList[i] + ',\n Would you like to join us for dinner tonight? \n\n');
// }
// guestList.unshift('Tooba', 'Zainab', 'sana');
// for(let i=0; i<guestList.length; i++){
//     console.log('Assalam O Akaikum dear...' + guestList[i] + ',\n Would you like to join us for dinner tonight? \n\n');
// }
//QNO 17
// define initial list of guest
let guests = ['Warisha', 'Mirub', 'Abeera', 'ali', 'zain', 'ayan'];
// print a msg  starting that only two people can be invited for dinner 
console.log("***************************************");
console.log("OH NO! we found out the dinner table wont arrive in time so  we can only invited two person for dinner.");
//remove guest from the list until only two names remain....
while (guests.length > 2) {
    let removeGuest = guests.pop();
    console.log(`sorry ${removeGuest} you cant be invited to dinner.. `);
}
// msg print to the two remaining guest they are still invited
guests.forEach(() => {
    console.log(`dear ${guests} , uh are still invited for dinner`);
});
//remove last two names
guests.pop();
guests.pop();
//print the  list to sure it is empty at the end
console.log("final guests list ", guests);
