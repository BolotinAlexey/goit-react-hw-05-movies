import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getCast } from '../../Util/api';
import Poster from '../Poster';

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    getCast(id)?.then(setCasts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    { casts } && (
      <>
        <p>Cast</p>
        {casts?.length === 0 ? (
          <p>We don't have any casts for this movies</p>
        ) : (
          casts?.map(({ profile_path, name, character, cast_id }) => (
            <li className="thumb-cast" key={cast_id}>
              <p>Character: {character || 'none'}</p>
              <p>Name: {name || 'none'}</p>
              <Poster width={100} url={profile_path} alt={name}></Poster>
              <br />
              <br />
            </li>
          ))
        )}
      </>
    )
  );
}

export default Cast;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
