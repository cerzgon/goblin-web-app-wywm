const API_URL = 'https://api.rawg.io/api/games?key=de581a94a6ba4ff6842fcdbd5941e7a4&dates=2019-09-01,2019-09-30&platforms=18,1,7';

async function fetchAndDisplayGames() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const gameListDiv = document.getElementById('game-list');
        const games = data.results.slice(0, 20);

        if (games && games.length > 0) {
            const ul = document.createElement('ul');
            games.forEach(game => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <p id="name">Product Name: ${game.name}</p>
                    <p id="released">Release Date: ${game.released}</p>
                    <p id="genre">Genre: ${game.genres.map(genre => genre.name).join(', ')}</p>
                    <p id="rating">Ratings: ${game.rating}</p>
                    <img id="img" src="${game.background_image}" alt="${game.name} Image" width="200">
                `;
                ul.appendChild(li);
            });
            gameListDiv.innerHTML = ''; // Clear previous results
            gameListDiv.appendChild(ul);
        } else {
            gameListDiv.textContent = 'No games found.';
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchAndDisplayGames);
