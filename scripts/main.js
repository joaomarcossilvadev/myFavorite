import {
  getPopularMovies,
  searchMovies
} from "./api.js";

import {
  getFavoriteMovies
} from "./storage.js";

import {
  renderMovies,
  showMessage
} from "./ui.js";

const searchInput = document.querySelector("#js-search");

const searchButton = document.querySelector(
  ".form-control button"
);

const favoriteCheckbox = document.querySelector(
  "#show-favorites"
);

async function showPopularMovies() {
  try {
    const movies = await getPopularMovies();

    renderMovies(
      movies,
      handleFavoriteChange
    );
  } catch (error) {
    console.error(error);

    showMessage(
      "Não foi possível carregar os filmes."
    );
  }
}

async function handleSearch() {
  const movieName = searchInput.value.trim();

  if (movieName === "") {
    return;
  }

  try {
    const movies = await searchMovies(movieName);

    if (movies.length === 0) {
      showMessage("Nenhum filme encontrado.");

      return;
    }

    favoriteCheckbox.checked = false;

    renderMovies(
      movies,
      handleFavoriteChange
    );

    searchInput.value = "";
  } catch (error) {
    console.error(error);

    showMessage(
      "Não foi possível pesquisar os filmes."
    );
  }
}

function showFavoriteMovies() {
  const favorites = getFavoriteMovies();

  if (favorites.length === 0) {
    showMessage("Nenhum filme favorito.");

    return;
  }

  renderMovies(
    favorites,
    handleFavoriteChange
  );
}

function handleFavoriteChange(isFavorite) {
  if (
    favoriteCheckbox.checked &&
    !isFavorite
  ) {
    showFavoriteMovies();
  }
}

searchButton.addEventListener(
  "click",
  handleSearch
);

searchInput.addEventListener(
  "keydown",
  function (event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }
);

favoriteCheckbox.addEventListener(
  "change",
  function () {
    if (favoriteCheckbox.checked) {
      showFavoriteMovies();
    } else {
      showPopularMovies();
    }
  }
);

showPopularMovies();