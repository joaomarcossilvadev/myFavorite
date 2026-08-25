export default {
  async fetch(request) {
    const requestUrl = new URL(request.url);

    const type =
      requestUrl.searchParams.get("type") || "popular";

    const query =
      requestUrl.searchParams.get("query") || "";

    const token = process.env.TMDB_TOKEN;

    if (!token) {
      return Response.json(
        {
          error: "Token do TMDB não configurado."
        },
        {
          status: 500
        }
      );
    }

    let tmdbUrl;

    if (type === "search") {
      if (query.trim() === "") {
        return Response.json(
          {
            error: "Informe um filme para pesquisar."
          },
          {
            status: 400
          }
        );
      }

      tmdbUrl =
        "https://api.themoviedb.org/3/search/movie" +
        `?query=${encodeURIComponent(query)}` +
        "&language=pt-BR&page=1";
    } else {
      tmdbUrl =
        "https://api.themoviedb.org/3/movie/popular" +
        "?language=pt-BR&page=1";
    }

    try {
      const response = await fetch(tmdbUrl, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const errorData = await response.json();

        return Response.json(
          {
            error: "Erro ao consultar o TMDB.",
            details: errorData
          },
          {
            status: response.status
          }
        );
      }

      const data = await response.json();

      return Response.json(data.results);
    } catch (error) {
      console.error(error);

      return Response.json(
        {
          error: "Erro interno do servidor.",
          details: error.message
        },
        {
          status: 500
        }
      );
    }
  }
};