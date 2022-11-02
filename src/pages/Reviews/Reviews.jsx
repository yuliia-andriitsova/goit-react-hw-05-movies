import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewApi } from 'services/FetchApi';
import css from './Reviews.module.css';

export default function Reviews() {
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
          <p className={css.reviewsAuthor}>Author: {item.author}</p>
          <p className={css.reviewsContent}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}
