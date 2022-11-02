import React from 'react';
import { useState, useEffect } from 'react';
import { searchApi } from 'services/FetchApi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import css from './Movies.module.css';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [query, setQuery] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      const data = await searchApi({ query });
      setMovie(data.results);
      // console.log(data.results);
    };
    getData();
  }, [query]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await searchApi({ query });
  //       setMovie(data.results);
  //     } catch {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getData();
  // }, [query]);

  // const getFormData = data => {
  //   setQuery(data);
  // };
  const getFormData = data => {
    setSearchParams({ query: data });
  };

  // if (isError || !query) {
  //   return 'Movies not found';
  // }

  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movie !== null && movie?.length > 0 ? (
        <ul>
          {movie?.map(item => (
            <li key={item.id}>
              <Link
                to={`${item.id}`}
                className={css.movieLink}
                id={item.id}
                state={{ from: location }}
              >
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p> Not found</p>
      )}
    </>
  );
}
