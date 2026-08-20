const movieContainer = document.querySelector("#movies-container");

const movies = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLlSgKDCGvCTXR-7H5kEzZH0PE8fvg7Zarq0CKnlJDQ&s=10',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    isFavorited: true,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    isFavorited: false,
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    isFavorited: false,
  },
];

function renderMovie(movie) {
  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card");

  // 1. Pôster
  const img = document.createElement("img");
  img.classList.add("poster");
  img.src = movie.image; // Corrigido de movie.img para movie.image
  img.alt = `Pôster do filme ${movie.title}`;

  // 2. Coluna central (meta-info)
  const metaInfo = document.createElement("div");
  metaInfo.classList.add("meta-info");

  const title = document.createElement("h3");
  title.innerText = `${movie.title} (${movie.year})`;

  const metaActions = document.createElement("div");
  metaActions.classList.add("meta-actions");

  // Avaliação
  const rating = document.createElement("span");
  rating.classList.add("rating");

  const star = document.createElement("img");
  star.src = "images/Star.svg";
  star.alt = "Ícone de estrela";

  rating.appendChild(star);
  rating.appendChild(document.createTextNode(` ${movie.rating}`));

  // Botão Favoritar
  const btnFavorite = document.createElement("button");
  btnFavorite.classList.add("btn-fav");
  btnFavorite.type = "button";

  const imgFavorite = document.createElement("img");
  imgFavorite.src = "images/Heart.svg";
  imgFavorite.alt = "Ícone de favorito";

  const spanFavorite = document.createElement("span");
  spanFavorite.innerText = movie.isFavorited ? "Favoritado" : "Favoritar";

  btnFavorite.appendChild(imgFavorite);
  btnFavorite.appendChild(spanFavorite);

  metaActions.appendChild(rating);
  metaActions.appendChild(btnFavorite);

  metaInfo.appendChild(title);
  metaInfo.appendChild(metaActions);

  // 3. Coluna da direita (descrição)
  const paragraphDescription = document.createElement("p");
  paragraphDescription.innerText = movie.description;
  paragraphDescription.classList.add("description");

  // Montagem do card
  cardContainer.appendChild(img);
  cardContainer.appendChild(metaInfo);
  cardContainer.appendChild(paragraphDescription);

  return cardContainer;
}

// Renderiza todos os filmes da lista
movies.forEach((movie) => {
  const card = renderMovie(movie);
  movieContainer.appendChild(card);
});