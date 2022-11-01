import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <ul>
      <li>
        <Link end to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/movies/:movieId">MovieDetails</Link>
      </li>
      <li>
        <Link to="/movies/:movieId/cast">Cast</Link>
      </li>
      <li>
        <Link to="/movies/:movieId/reviews">Reviews</Link>
      </li>
    </ul>
  );
};
