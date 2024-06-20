//exercise 44
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy sandwich");
}
//call the function
sandwich("chicken", "bread", "mayo", "egg", "tomato", "cucumber");
sandwich("bread", "butter", "cheese");
sandwich("bread", "mayo");
