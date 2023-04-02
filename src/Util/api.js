import axios from 'axios';

const KEY = '66413c0c73bd8d6f9d602d8ba291e1c5';
export async function getTrends() {
  const response = await axios(
    'https://api.themoviedb.org/3/trending/all/day?api_key=' + KEY
  );
  return response.data.results;
}
