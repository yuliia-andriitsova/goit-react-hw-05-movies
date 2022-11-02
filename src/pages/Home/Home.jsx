import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { trendingsApi } from 'services/FetchApi';
import css from './Home.module.css';

const Home = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await trendingsApi();
      setMovie(data.results);
    };
    getData();
  }, []);
  return (
    <>
      <h2 className={css.title}> Trending today</h2>
      <ul className={css.homeList}>
        {movie?.map(({ poster_path, original_title, id }) => (
          <li key={id} className={css.list}>
            <Link to={`movies/${id}`} className={css.homeLink}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="movie"
                width="200"
              />

              <p className={css.text}> {original_title} </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
