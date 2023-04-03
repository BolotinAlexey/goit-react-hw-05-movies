import { Link, useLocation } from 'react-router-dom';
import { Ol } from './ListMovies.styled';

function ListMovies({ list }) {
  const location = useLocation();
  return (
    <Ol>
      {list &&
        list.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={'/movies/' + id} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
    </Ol>
  );
}

export default ListMovies;
