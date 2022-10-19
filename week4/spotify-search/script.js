(() => {
    // Variables
    let searchBtn = document.querySelector("#search-btn");
    let searchInput = document.querySelector("#search-input");
    let searchType = document.querySelector("#search-select");
    let resultsContainer = document.querySelector(".results-container");
    let searchTitle = document.querySelector(".search-title");

    searchBtn.addEventListener("click", () => {
        resultsContainer.innerHTML = "";

        let inputValue = searchInput.value;
        let typeValue = searchType.value;
        // console.log(inputValue);
        // console.log(typeValue);
        getMusic(inputValue, typeValue);
    });

    // fetch data from Spotify
    function getMusic(name, type) {
        $.ajax({
            url: `https://spicedify.herokuapp.com/spotify?q=${name}&type=${type}`,
            method: "GET", // its get by default
            success: function (data) {
                let musicData = data.artists.items || data.albums.items;

                if (musicData.length > 0 && musicData.length != 0) {
                    searchTitle.innerText = `Search results for ${name}`;
                    printSearchResults(musicData);
                } else {
                    searchTitle.innerText = `No results`;
                }

                console.log(musicData);
            },
            error: function (error) {
                console.log(error);
            },
        });
    }

    function printSearchResults(musicData) {
        musicData.forEach((item) => {
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
                                    <a href="${item.external_urls.spotify}">
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
        });
    }
})();
