const movieContainer = document.querySelector("#movies-container");
const searchInput = document.querySelector("#js-search");
const searchButton = document.querySelector(".form-control button");

async function searchMovies(movieName) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&language=pt-BR&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`
    }
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();

  return data.results;
}

async function getPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();

  return data.results;
}

async function handleSearch() {
  const movieName = searchInput.value.trim();

  if (movieName === "") {
    return;
  }

  const movies = await searchMovies(movieName);

  movieContainer.innerHTML = "";

  if (movies.length === 0) {
    movieContainer.innerHTML = "<p>Nenhum filme encontrado.</p>";
    return;
  }

  movies.forEach((movie) => {
    const card = renderMovie(movie);
    movieContainer.appendChild(card);
  });

  searchInput.value = "";
}

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});


function renderMovie(movie) {
  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("poster");

  img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  img.alt = `Pôster do filme ${movie.title}`;

  const metaInfo = document.createElement("div");
  metaInfo.classList.add("meta-info");

  const title = document.createElement("h3");

  const year = movie.release_date
    ? movie.release_date.split("-")[0]
    : "Sem data";

  title.innerText = `${movie.title} (${year})`;

  const metaActions = document.createElement("div");
  metaActions.classList.add("meta-actions");

  const rating = document.createElement("span");
  rating.classList.add("rating");

  const star = document.createElement("img");
  star.src = "images/Star.svg";
  star.alt = "Ícone de estrela";

  rating.appendChild(star);

  rating.appendChild(
    document.createTextNode(` ${movie.vote_average.toFixed(1)}`)
  );

  const btnFavorite = document.createElement("button");
  btnFavorite.classList.add("btn-fav");
  btnFavorite.type = "button";

  const imgFavorite = document.createElement("img");
  imgFavorite.src = "images/Heart.svg";
  imgFavorite.alt = "Ícone de favorito";

  const spanFavorite = document.createElement("span");
  spanFavorite.innerText = "Favoritar";

  btnFavorite.appendChild(imgFavorite);
  btnFavorite.appendChild(spanFavorite);

  metaActions.appendChild(rating);
  metaActions.appendChild(btnFavorite);

  metaInfo.appendChild(title);
  metaInfo.appendChild(metaActions);

  const paragraphDescription = document.createElement("p");

  paragraphDescription.innerText =
    movie.overview || "Descrição não disponível.";

  paragraphDescription.classList.add("description");

  cardContainer.appendChild(img);
  cardContainer.appendChild(metaInfo);
  cardContainer.appendChild(paragraphDescription);

  return cardContainer;
}

async function renderMovies() {
  const movies = await getPopularMovies();

  movies.forEach((movie) => {
    const card = renderMovie(movie);

    movieContainer.appendChild(card);
  });
}

renderMovies();