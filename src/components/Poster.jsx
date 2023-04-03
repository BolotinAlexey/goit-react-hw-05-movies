import portrait from '../portrait.jpeg';
const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';
// const BASE_POSTER2 = 'https://image.tmdb.org/t/p/w200';

function Poster({ url, alt, width }) {
  // const [img, setImg] = useState(null);

  return (
    <img width={width} src={url ? BASE_POSTER + url : portrait} alt={alt} />
  );
}
export default Poster;
