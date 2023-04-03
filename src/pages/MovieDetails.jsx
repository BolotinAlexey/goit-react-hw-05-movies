import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

import { getDetails } from '../Util/api';
import Poster from '../components/Poster';
import { useRef } from 'react';

function MovieDetails() {
  const [details, setDetails] = useState(null);
  const {
    poster_path = '',
    original_title = '',
    name = '',
    release_date = '',
    genres = '',
    overview = '',
  } = details ?? {};

  const location = useLocation();
  const comeBack = useRef(location.state?.from || '/');

  useEffect(() => {
    getDetails(id).then(setDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id } = useParams();
  //   const { poster_path, name, genres, overview, release_date } = details;

  return (
    details && (
      <div>
        <p>
          {/* link to back */}
          <Link to={comeBack.current}>Go back</Link>
        </p>
        <Poster width={200} url={poster_path} alt={name}></Poster>
        <p>
          {original_title}
          <span> ({release_date.substring(0, 4)})</span>
        </p>
        <p>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </p>
        <p>{overview}</p>
        <hr />
        <br />
        <p>Additional information:</p>
        <br />
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    )
  );
}

export default MovieDetails;
