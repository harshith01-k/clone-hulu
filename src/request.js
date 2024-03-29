const API_KEY = "5ce891309569085306aeea434ad09185";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchScience: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchMys: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchAnim: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchWest: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
