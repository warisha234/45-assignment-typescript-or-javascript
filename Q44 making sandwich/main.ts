//exercise 44

function sandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items");
    
    items.forEach(singleItem => console.log(singleItem));
    
    console.log("\nNow enjoy sandwich");
}

//call the function
sandwich("chicken","bread","mayo","egg","tomato","cucumber");
sandwich("bread","butter","cheese");
sandwich("bread","mayo");