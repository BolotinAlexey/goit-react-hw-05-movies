import { Link } from 'react-router-dom';

function ListMovies({ list }) {
  return (
    <ul>
      {list &&
        list.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={'/movies/' + id}>{title || name}</Link>
          </li>
        ))}
    </ul>
  );
}

export default ListMovies;
