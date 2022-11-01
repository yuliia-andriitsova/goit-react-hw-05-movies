import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { movieDetailsApi } from 'services/FetchApi';
import { Link } from 'react-router-dom';

export function MovieDetails() {
  const [activeMovie, setActiveMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getMovieId = async () => {
      const data = await movieDetailsApi(movieId);
      setActiveMovie(data);
      console.log(data);
    };
    getMovieId();
  }, [movieId]);

  // let year = activeMovie.release_date.slice(0, 4);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${activeMovie.poster_path}`}
        alt={activeMovie.title}
        width="200"
      />
      <h2>
        {activeMovie.original_title} ({activeMovie.release_date})
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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
