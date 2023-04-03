import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getDetails } from '../Util/api';
import Poster from '../components/Poster';

function MovieDetails() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getDetails(id).then(setDetails).then(console.log(details));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id } = useParams();
  //   const { poster_path, name, genres, overview, release_date } = details;

  return (
    details && (
      <div>
        <Poster url={details?.poster_path} alt={details?.name}></Poster>
        <p>
          {details?.original_title}
          <span> ({details?.release_date.substring(0, 4)})</span>
        </p>
        <p>
          {/* {details?.genres} */}
          {details?.genres?.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </p>
        <p>{details?.overview}</p>
        <hr />
        <p>Additional information:</p>
        <br />
        <br />
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    )
  );
}

export default MovieDetails;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// https://image.tmdb.org/t/p/w500

// backdrop_path
// :
// "/bT3IpP7OopgiVuy6HCPOWLuaFAd.jpg"
// belongs_to_collection
// :
// {id: 929336, name: 'Murder Mystery Collection', poster_path: '/tXvqgUtguLjVVYqyAOy0eYtm5lH.jpg', backdrop_path: '/dsHP6PVJkMuJgftxHMHAhnYNqtG.jpg'}
// budget
// :
// 0
// genres
// :
// (3) [{…}, {…}, {…}]
// homepage
// :
// "https://www.netflix.com/title/81212842"
// id
// :
// 638974
// imdb_id
// :
// "tt15255288"
// original_language
// :
// "en"
// original_title
// :
// "Murder Mystery 2"
// overview
// :
// "After starting their own detective agency, Nick and Audrey Spitz land a career-making case when their billionaire pal is kidnapped from his wedding."
// popularity
// :
// 235.901
// poster_path
// :
// "/5wpVy0KUWzDKDKgrayM0Q8lXOiK.jpg"
// production_companies
// :
// (5) [{…}, {…}, {…}, {…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2023-03-26"
// revenue
// :
// 0
// runtime
// :
// 90
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "This mystery is deux or die."
// title
// :
// "Murder Mystery 2"
// video
// :
// false
// vote_average
// :
// 6.772
// vote_count
// :
// 197
