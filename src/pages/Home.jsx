import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import ListMovies from '../components/ListMovies/ListMovies';
import { getTrends } from '../Util/api';
// import { proc } from '../Util/proc';

function Home() {
  const [trendes, setTrendes] = useState(null);

  useEffect(() => {
    getTrends().then(setTrendes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Trading today</h2>
      <ListMovies list={trendes} />
    </>
  );
}
export default Home;
