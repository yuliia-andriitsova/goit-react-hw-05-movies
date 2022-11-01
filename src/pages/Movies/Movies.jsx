import React from 'react';
import { useState, useEffect } from 'react';
import { searchApi } from 'services/FetchApi';
import { Link } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import css from './Movies.module.css';

export function Movies() {
  const [movie, setMovie] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await searchApi({ query });
      setMovie(data.results);
      console.log(data.results);
    };
    getData();
  }, [query]);

  const getFormData = data => {
    setQuery(data);
  };

  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movie && (
        <ul>
          {movie?.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`} className={css.movieLink} id={item.id}>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.name}
                  width="50"
                /> */}
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
