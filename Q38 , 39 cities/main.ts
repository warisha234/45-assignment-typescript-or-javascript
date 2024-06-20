//exercise 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan.
//  Give the parameter for the country a default value.
//  Call your function for three different cities, at least one of which is not in the default country.

// function describe_city(city: string, country: string = "Pakistan"){
//          console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi");
// describe_city("Islamabad");
// describe_city("New York","USA");


//exercise 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city: string, country: string) : string{
        return `${city} , ${country}`;
}
console.log(city_country("Lahore","Pakistan"));

console.log(city_country("Tokyo","Japan"));

console.log(city_country("New York","United States"));























