import axios from 'axios';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const BASE = 'https://api.themoviedb.org/3/';
const KEY = '?api_key=66413c0c73bd8d6f9d602d8ba291e1c5';
const LANG = '&language=en-US';

export async function getTrends() {
  const response = await axios(BASE + 'trending/all/day' + KEY);
  return response.data.results;
}

export async function getDetails(id) {
  const response = await axios(BASE + 'movie/' + id + KEY + LANG);
  return response.data;
}
