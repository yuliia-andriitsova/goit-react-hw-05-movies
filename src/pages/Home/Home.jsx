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
      <ul className={css.homeList}>
        {movie?.map(({ original_title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`} className={css.homeLink}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
