// Countries Array
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];

// Variables

const $searchInput = $("#search-input");
const $searchResults = $(".search-results");
let filteredCountries;

let searchInputValue = "";

const $clearSearchBtn = $(".clear-search");

// empty the search input when refreshed
$searchInput.val("");

// triger the filter function on input event
$searchInput.on("input", function () {
    searchInputValue = $searchInput.val().toLowerCase();
    filter(searchInputValue);
    console.log(searchInputValue);
});

// function to search and filter using the user input and returns list of countries as a result
function filter(searchInputValue) {
    console.log(searchInputValue);
    if (searchInputValue != "") {
        filteredCountries = countries.filter((country) => {
            return (
                country.toLowerCase().slice(0, searchInputValue.length) ===
                searchInputValue
            );
        });
    }
    printSearchResults(filteredCountries);

    console.log(filteredCountries);
}

// function to print the results
function printSearchResults(filteredCountries) {
    $searchResults.html("");
    if (searchInputValue !== "") {
        filteredCountries.forEach((country, id) => {
            if (id < 4) {
                $searchResults[0].innerHTML += `<li class="result">${country}</li>`;
                //$searchResults.html(`<li >${country}</li>`);
            }
        });
    }

    if (filteredCountries.length == 0) {
        $searchResults[0].innerHTML += `<li>No results..</li>`;
    }
}

// fade out the results by default
$searchResults.fadeOut(100);

// fadeout results when clicked outside the search bar
$searchInput.blur(() => {
    $searchResults.fadeOut(300);
});
// fadein results when clicked inside the search bar
$searchInput.focus(() => {
    $searchResults.fadeIn(300);
});

// show the country name in search bar when clicked
$searchResults.click((e) => {
    console.log(e.target.innerText);
    let currentSelection = e.target.innerText;
    $searchInput.val(currentSelection);
});

// clear search input
$clearSearchBtn.click(() => {
    $searchInput.val("");
});

// highlight a result by keyboard arrows -- not working yet --
document.onkeydown = (e) => {
    if (e.key == "ArrowDown") {
        if ($(".higlight")) {
            console.log("there is one highlighted");
            console.log($(".result").next().first());
            $(".result").next().first().addClass("higlight");
        }
        $(".result").first().addClass("highlight");

        //$(".higlight").removeClass("higlight");
    } else if (e.key == "ArrowUp") {
    }
};
