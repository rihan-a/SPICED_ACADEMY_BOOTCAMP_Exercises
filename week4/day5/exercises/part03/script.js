// Part03
//Rewrite the following function to use destructuring assignment for the three variables it creates:

// function logInfo(city) {
//     const name = city.name;
//     const country = city.country;
//     const numPeople = city.population;
//     console.log(
//         `${name} is in ${country} and has ${numPeople} inhabitants in it.`
//     );
// }
//This is how you would call it:
//logInfo({ name: "Marseille", country: "France", population: 861635 });
//The three highlighted lines should be replaced with a single line (and you shouldn't change anything else).

function logInfo(city) {
    const { name, country, population: numPeople } = city;
    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });
