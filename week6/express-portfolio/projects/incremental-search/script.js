// Variables
const $searchInput = $("#search-input");
const $searchResults = $(".search-results");
//let filteredCountries;

let searchInputValue = "";

const $clearSearchBtn = $(".clear-search");

// empty the search input when refreshed
$searchInput.val("");

// triger the filter function on input event
$searchInput.on("input", function () {
    searchInputValue = $searchInput.val().toLowerCase();
    getCountries(searchInputValue);
});

// fetch countries by name from API
function getCountries(name) {
    $.ajax({
        url: `https://spicedworld.herokuapp.com/?q=${name}`,
        method: "GET", // its get by default
        success: function (filteredCountries) {
            console.log("success");
            printSearchResults(filteredCountries);
        },
        error: function (error) {
            console.log(error);
        },
    });
}

// function to search and filter using the user input and returns list of countries as a result
// function filter(searchInputValue) {
//     console.log(searchInputValue);
//     if (searchInputValue != "") {
//         filteredCountries = countries.filter((country) => {
//             return (
//                 country.toLowerCase().slice(0, searchInputValue.length) ===
//                 searchInputValue
//             );
//         });
//     }
//     printSearchResults(filteredCountries);

//     console.log(filteredCountries);
// }

// function to print the results
function printSearchResults(filteredCountries) {
    $searchResults.html("");
    if (searchInputValue !== "") {
        filteredCountries.forEach((country, id) => {
            if (id < 4) {
                $searchResults[0].innerHTML += `<li class="result">${country}</li>`;
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
            $(".result").eq(0).addClass("higlight");
        }
        $(".result").first().addClass("highlight");

        //$(".higlight").removeClass("higlight");
    } else if (e.key == "ArrowUp") {
    }
};
