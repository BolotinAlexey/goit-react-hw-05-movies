import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getCast } from '../../Util/api';
import Poster from '../Poster';

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    getCast(id)?.then(setCasts)?.then(console.log(casts));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    { casts } && (
      <>
        <p>Cast</p>
        {casts?.map(
          ({ profile_path, name, character, cast_id }) =>
            profile_path &&
            name &&
            character && (
              <li className="thumb-cast" key={cast_id}>
                <p>Character: {character}</p>
                <p>Name: {name}</p>
                <Poster width={100} url={profile_path} alt={name}></Poster>
                <br />
                <br />
              </li>
            )
        )}
      </>
    )
  );
}

export default Cast;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
