//Part 04
//Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

var getNameAndCountry = function (city) {
    return [city.name, city.country];
};

var getRelocatedCity = function (city1, city2) {
    city2.country = "Germany";
    var country = getNameAndCountry(city2)[1];
    city1.country = country;

    return city1;
};
