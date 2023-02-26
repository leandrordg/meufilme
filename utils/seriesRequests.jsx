const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const seriesRequests = {
  fetchTopRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=pt-BR`,
  fetchActionSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=10759`,
  fetchComedySeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=35`,
  fetchHorrorSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=27`,
  fetchRomanceSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=99`,
};

export default seriesRequests;
