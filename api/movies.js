export default async function handler(req, res) {
  const { type = "popular", query = "" } = req.query;

  const token = process.env.TMDB_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "Token do TMDB não configurado."
    });
  }

  let url;

  if (type === "search") {
    if (!query.trim()) {
      return res.status(400).json({
        error: "Informe um filme para pesquisar."
      });
    }

    url =
      `https://api.themoviedb.org/3/search/movie` +
      `?query=${encodeURIComponent(query)}` +
      `&language=pt-BR&page=1`;
  } else {
    url =
      "https://api.themoviedb.org/3/movie/popular" +
      "?language=pt-BR&page=1";
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Erro ao consultar o TMDB."
      });
    }

    const data = await response.json();

    return res.status(200).json(data.results);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro interno do servidor."
    });
  }
}