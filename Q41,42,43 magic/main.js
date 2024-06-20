//exercise 41
// function magicians_show(magicians: string[]) {
//     magicians.forEach(name =>console.log(name))
// }
// let magician_name = ["Eric","John","can"];
// magicians_show(magician_name);
//exercise 42
// function magicians_show(magicians: string[]) {
//     magicians.forEach(name =>console.log(name))
// }
// function make_greet(magicians:string[]){
//    return  magicians.map(name =>  `the great ${name}`);
// }
// let magician_name = ["Eric","John","can"];
// let great_magicians = make_greet(magician_name);
// console.log(great_magicians);
//exercise 43
function magicians_show(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_greet(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magician_name = ["Eric", "John", "can"];
var copy_magicians_names = magician_name.slice();
var copy_great_magians = make_greet(copy_magicians_names);
magicians_show(magician_name);
magicians_show(copy_great_magians);
