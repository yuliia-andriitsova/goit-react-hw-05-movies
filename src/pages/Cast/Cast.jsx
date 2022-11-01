import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { movieCastsApi } from 'services/FetchApi';

export function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const data = await movieCastsApi(movieId);
      setCast(data.cast);
      console.log(data.cast);
    };
    getCast();
  }, []);

  return (
    <ul>
      {cast?.map(item => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
            alt={item.name}
            width="70"
          />
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}
