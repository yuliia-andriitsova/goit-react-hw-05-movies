import Home from 'pages/Home/Home.jsx';
import { Header } from 'components/Header/Header';
import { Movies } from './pages/Movies/Movies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Cast } from './pages/Cast/Cast';
import { Reviews } from './pages/Reviews/Reviews';
// import { NotFound } from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 20,
    //   color: '#010101',
    // }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
