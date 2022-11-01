import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  const activeClassName = ({ isActive }) => (isActive ? css.active : css.link);

  return (
    <header>
      <ul className={css.header}>
        <li>
          <NavLink to="/" end className={activeClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={activeClassName}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
