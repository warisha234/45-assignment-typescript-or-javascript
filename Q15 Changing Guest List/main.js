"use strict";
let guestList = ['Warisha', 'Mirub', 'Abeera'];
for (let i = 0; i < guestList.length; i++) {
    console.log('Assalam O Akaikum dear...' + guestList[i] + ',\n Would you like to join us for dinner tonight? \n\n');
}
let absent_person = 'Mirub';
let new_guest = 'ashi';
guestList[1] = new_guest;
for (let i = 0; i < guestList.length; i++) {
    console.log('Assalam O Akaikum dear...' + guestList[i] + ',\n Would you like to join us for dinner tonight? \n\n');
}
console.log(`miss ${absent_person}  is not comming for dinner today.`);
