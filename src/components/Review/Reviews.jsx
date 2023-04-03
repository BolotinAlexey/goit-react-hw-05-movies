import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getReview } from '../../Util/api';

function Reviews() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    getReview(id)?.then(setReview);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, review?.length]);

  return (
    <>
      <p>Review</p>
      {review?.length === 0 ? (
        <p>We don't have any reviews for this movies</p>
      ) : (
        review?.map(({ author, content, id }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p> {content}</p>

            <br />
            <br />
          </li>
        ))
      )}
    </>
  );
}

export default Reviews;

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
