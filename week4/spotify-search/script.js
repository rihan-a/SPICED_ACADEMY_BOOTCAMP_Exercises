(() => {
    // Variables
    let searchBtn = document.querySelector("#search-btn");
    let searchInput = document.querySelector("#search-input");
    let searchType = document.querySelector("#search-select");
    let resultsContainer = document.querySelector(".results-container");
    let searchTitle = document.querySelector(".search-title");
    let logoBtn = document.querySelector(".logo-container");
    let loadingSpinner = document.querySelector(".lds-facebook");
    let loadMore = document.querySelector(".load-more");
    let searchUrl;
    let nextUrl;

    // refresh page when logo clicked
    logoBtn.addEventListener("click", () => {
        searchInput.value = "";
        location.reload();
    });

    searchBtn.addEventListener("click", searchMusic);
    document.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            searchMusic();
        }
    });

    function searchMusic() {
        loadMore.style.display = "none";
        loadingSpinner.style.display = "block";
        resultsContainer.innerHTML = "";
        let inputValue = searchInput.value;
        let typeValue = searchType.value;
        searchUrl = `https://spicedify.herokuapp.com/spotify?q=${inputValue}&type=${typeValue}`;
        getMusic(searchUrl, inputValue, typeValue);
    }

    // fetch data from Spotify
    function getMusic(URL, name, type) {
        $.ajax({
            url: URL,
            method: "GET", // its get by default
            success: function (data) {
                //console.log(data);
                let musicData = data.artists.items || data.albums.items;
                nextUrl = data.artists.next || data.albums.next;
                if (musicData.length > 0 && musicData.length != 0) {
                    searchTitle.innerText = `Search results for '${name}'`;
                    printSearchResults(musicData, type);
                } else {
                    searchTitle.innerText = `No results`;
                }
                //console.log(musicData);
            },
            error: function (error) {
                console.log(error);
            },
        });
    }

    function printSearchResults(musicData, type) {
        let imgUrl;
        loadingSpinner.style.display = "none";

        musicData.forEach((item) => {
            // check if there is images otherwise show and empty placeholder
            if (type == "artist") {
                if (item.images.length > 0) {
                    imgUrl = item.images[0].url;
                } else {
                    imgUrl =
                        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";
                }
                // Artists html
                resultsContainer.innerHTML += `
         <div class="outer-card">
                    <div class="inner-card">
                        <div class="card-img">
                            <img src="${imgUrl}" alt="" />
                        </div>
                        <div class="card-desc">
                            <a href="#">${item.name}</a>
                            <div class="artist-play-container">
                                <p>${item.genres[0]}</p>
                                <div class="play-btn">
                                    <a href="${item.external_urls.spotify}" target="_blank">
                                        <img
                                        src="./assets/play_arrow_FILL1_wght400_GRAD0_opsz48.svg"
                                        alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
            } else {
                // Albums html - not done yet
                resultsContainer.innerHTML += `
         <div class="outer-card">
                    <div class="inner-card">
                        <div class="card-img">
                            <img src="${item.images[0].url}" alt="" />
                        </div>
                        <div class="card-desc">
                            <a href="#">${item.name}</a>
                            <div class="artist-play-container">
                                <p>${item.genres[0]}</p>
                                <div class="play-btn">
                                    <a href="${item.external_urls.spotify}" target="_blank">
                                        <img
                                        src="./assets/play_arrow_FILL1_wght400_GRAD0_opsz48.svg"
                                        alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
            }
        });

        if (nextUrl !== null) {
            loadMore.style.display = "block";
        } else {
            loadMore.style.display = "none";
        }
    }
    // load more search results
    loadMore.addEventListener("click", () => {
        getMusic(nextUrl, searchInput.value);
    });
})();
