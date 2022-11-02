import React from 'react';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { movieDetailsApi } from 'services/FetchApi';
import { Link } from 'react-router-dom';
import css from './MovieDetais.module.css';

export default function MovieDetails() {
  const [activeMovie, setActiveMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!movieId) return;
    const getMovieId = async () => {
      const data = await movieDetailsApi(movieId);
      setActiveMovie(data);
    };
    getMovieId();
  }, [movieId]);

  return (
    <div>
      <Link className={css.button} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      <div className={css.about}>
        <img
          src={`https://image.tmdb.org/t/p/w500${activeMovie.poster_path}`}
          alt={activeMovie.title}
          width="200"
        />
        <h2>
          <p>
            {activeMovie.original_title} (
            {activeMovie?.release_date?.slice(0, 4)})
          </p>
        </h2>
        <p>User Score: {activeMovie.popularity}%</p>
        <p>
          <span>Overview</span>
          {activeMovie.overview}
        </p>
        <span>Genres</span>
        <ul>
          {activeMovie?.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <p>Additional informathion</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Outlet />
    </div>
  );
}
