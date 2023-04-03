const BASE_POSTER = 'https://image.tmdb.org/t/p/w200';
function Poster({ url, alt, width }) {
  return (
    <img width={width} src={BASE_POSTER + url} alt={alt} /> || (
      <img width={width} src={BASE_POSTER + url} alt={alt} />
    )
  );
}
export default Poster;
