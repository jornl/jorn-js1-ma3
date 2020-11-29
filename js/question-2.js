const gamesContainer = document.querySelector(".games");
let apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {
    try {
        const response = await (await fetch(apiUrl)).json();
        const games = response.results;

        gamesContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            if (i === 8) {
                break;
            }

            gamesContainer.innerHTML += `
                <div class="game">
                    <img src="${games[i].background_image}" alt="${games[i].name}">
                    <h2>${games[i].name}</h2>
                    <p>
                        <span class="rating">Rating: ${games[i].rating}</span> -
                        <span class="tags">Tags: ${games[i].tags.length}</span>
                    </p>
            `;
        }
    } catch (error) {
        console.log(error);
        gamesContainer.innerHTML = "<h2>An error occurred while fetching games. Please try again later.</h2>";
        // In a bigger project, I would have created a reusable error component.
    };
}

getGames();