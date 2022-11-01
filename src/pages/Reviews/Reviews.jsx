import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewApi } from 'services/FetchApi';

export function Reviews() {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      const data = await movieReviewApi(movieId);
      console.log(data.results);
      setReview(data.results);
    };
    getReview();
  }, []);

  return (
    <ul>
      {review?.map(item => (
        <li key={item.id}>
          {item.author}
          {item.content}
        </li>
      ))}
    </ul>
  );
}
