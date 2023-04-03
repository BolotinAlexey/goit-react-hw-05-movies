const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';
function Poster({ url, alt }) {
  return <img src={BASE_POSTER + url} alt={alt} />;
}
export default Poster;