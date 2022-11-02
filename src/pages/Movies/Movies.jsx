import React from 'react';
import { useState, useEffect } from 'react';
import { searchApi } from 'services/FetchApi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import css from './Movies.module.css';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('activeMovie'));
  const query = searchParams.get('query') ?? '';

  const [movie, setMovie] = useState(null);
  // const [query, setQuery] = useState(null);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (!query) {
      return 'Not found!';
    }
    const getData = async () => {
      const data = await searchApi({ query });
      setMovie(data.results);
      // console.log(data.results);
    };
    getData();
  }, [query]);

  // const getFormData = data => {
  //   setQuery(data);
  // };
  const getFormData = data => {
    setSearchParams({ query: data });
  };
  return (
    <>
      <SearchForm getFormData={getFormData} />
      {movie && (
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
      )}
    </>
  );
}
