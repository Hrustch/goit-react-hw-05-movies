import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Header } from './Header';
import Movie from 'pages/Movie';
import MovieCast from './Movie/AddInfo/MovieCast';
import MovieReviews from './Movie/AddInfo/MovieReviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
/* c06946175aba84ec1feb3a6035efdb4d */
