import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ListMovies from '../components/ListMovies/ListMovies';
import { getMovies } from '../Util/api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  // const [word, setWord] = useState('');

  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const strQuery = query.get('query');
    // setWord(strQuery ?? '');
    if (strQuery) getMovies(strQuery).then(setMovies);
    if (!strQuery) {
      setMovies(null);
      setQuery({});
    }
  }, [query, setQuery]);

  function onSearch(e) {
    e.preventDefault();
    setQuery({
      query: e.currentTarget.elements.q.value,
    });
    e.currentTarget.reset();

    // getMovies(word).then(setMovies).then(setWord(''));
  }
  // function onChange({ target }) {
  //   setWord(target.value);
  // }

  return (
    <form onSubmit={onSearch}>
      <div>Movies</div>
      <label>
        <input name="q" type="text" />
      </label>
      <button type="submit">Search</button>
      {movies?.length > 0 && (
        <>
          <h2>List movies</h2>
          <ListMovies list={movies} />
        </>
      )}
    </form>
  );
};

export default Movies;

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
