import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getTrends } from '../Util/api';
// import { proc } from '../Util/proc';

function Home() {
  const [trendes, setTrendes] = useState(null);

  useEffect(() => {
    getTrends().then(setTrendes).then(console.log(trendes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      Home
      {trendes &&
        trendes.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={'/movies/' + id}>{title || name}</Link>
          </li>
        ))}
    </ul>
  );
}
export default Home;
