const keyApi = import.meta.env.VITE_APIKEY;

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${keyApi}&s=${search}`
    );
    const json = await response.json();
    const movies = json.Search;
    return movies?.map((movie) => ({
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      imdbID: movie.imdbID,
    }));
  } catch (e) {
    throw new Error("Error searching movies: " + e.message);
  }
};
