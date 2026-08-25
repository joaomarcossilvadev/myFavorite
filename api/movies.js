export async function getPopularMovies() {
  const response = await fetch("/api/movies?type=popular");

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  return await response.json();
}

export async function searchMovies(movieName) {
  const url =
    `/api/movies?type=search&query=${encodeURIComponent(movieName)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`);
  }

  return await response.json();
}