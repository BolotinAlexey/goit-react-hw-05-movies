const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';
// const BASE_POSTER2 = 'https://image.tmdb.org/t/p/w500';
function Poster({ url, alt, width }) {
  return <img width={width} src={BASE_POSTER + url} alt={alt} />;
}
export default Poster;
