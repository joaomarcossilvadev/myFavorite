const FAVORITES_KEY = "favorites";

export function getFavoriteMovies() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

export function saveFavoriteMovies(movies) {
  const moviesToJson = JSON.stringify(movies);

  localStorage.setItem(FAVORITES_KEY, moviesToJson);
}

export function isFavoriteMovie(movieId) {
  const favorites = getFavoriteMovies();

  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === movieId) {
      return true;
    }
  }

  return false;
}

export function toggleFavorite(movie) {
  const favorites = getFavoriteMovies();

  let favoritePosition = -1;

  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === movie.id) {
      favoritePosition = i;
      break;
    }
  }

  if (favoritePosition !== -1) {
    favorites.splice(favoritePosition, 1);

    saveFavoriteMovies(favorites);

    return false;
  }

  favorites.push(movie);

  saveFavoriteMovies(favorites);

  return true;
}