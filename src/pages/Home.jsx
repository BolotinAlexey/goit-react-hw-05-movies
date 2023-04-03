import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ListMovies from '../components/ListMovies/ListMovies';
import { getTrends } from '../Util/api';

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

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
export default Home;
