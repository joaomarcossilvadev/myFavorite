import {
  isFavoriteMovie,
  toggleFavorite
} from "./storage.js";

const movieContainer = document.querySelector("#movies-container");

export function showMessage(message) {
  movieContainer.innerHTML = "";

  const paragraph = document.createElement("p");

  paragraph.innerText = message;

  movieContainer.appendChild(paragraph);
}

export function renderMovies(movies, onFavoriteChange) {
  movieContainer.innerHTML = "";

  movies.forEach(function (movie) {
    const card = renderMovie(movie, onFavoriteChange);

    movieContainer.appendChild(card);
  });
}

function renderMovie(movie, onFavoriteChange) {
  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("poster");

  if (movie.poster_path) {
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    img.src = "images/no-image.png";
  }

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

  const voteAverage = Number(movie.vote_average || 0);

  rating.appendChild(
    document.createTextNode(` ${voteAverage.toFixed(1)}`)
  );

  const btnFavorite = document.createElement("button");
  btnFavorite.classList.add("btn-fav");
  btnFavorite.type = "button";

  const imgFavorite = document.createElement("img");
  imgFavorite.alt = "Ícone de favorito";

  const spanFavorite = document.createElement("span");

  const favorite = isFavoriteMovie(movie.id);

  updateFavoriteButton(
    imgFavorite,
    spanFavorite,
    favorite
  );

  btnFavorite.appendChild(imgFavorite);
  btnFavorite.appendChild(spanFavorite);

  btnFavorite.addEventListener("click", function () {
    const favorite = toggleFavorite(movie);

    updateFavoriteButton(
      imgFavorite,
      spanFavorite,
      favorite
    );

    if (onFavoriteChange) {
      onFavoriteChange(favorite);
    }
  });

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

function updateFavoriteButton(
  imgFavorite,
  spanFavorite,
  isFavorite
) {
  if (isFavorite) {
    imgFavorite.src = "images/Heart-Full.svg";
    spanFavorite.innerText = "Favoritado";
  } else {
    imgFavorite.src = "images/Heart.svg";
    spanFavorite.innerText = "Favoritar";
  }
}