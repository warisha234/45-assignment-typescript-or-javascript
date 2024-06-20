// exercise 36 
// T-Shirt:
//  Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size: string, message: string) {
//     console.log("The size of the shirt is " + size);
//     console.log("the color is blue and prints on shirt is " + message);
// }
// make_shirt("small","Wish warisha");


// //exercise 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
//  I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string ="large", message: string ="I love TypeScript"){
    console.log(`Creating a ${size} size shirt with the ${message} prints on shirts`);
}
make_shirt();
//for medium size 
make_shirt("medium");
//any size with diffrent message
make_shirt("small","I am a programmer");