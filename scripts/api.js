import { TMDB_TOKEN } from "../config.js";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`
  }
};

export async function getPopularMovies() {
  const url = `${BASE_URL}/movie/popular?language=pt-BR&page=1`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();

  return data.results;
}

export async function searchMovies(movieName) {
  const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(movieName)}&language=pt-BR&page=1`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  const data = await response.json();

  return data.results;
}