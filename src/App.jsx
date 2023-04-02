import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Layout from './components/Layout/Layout';
import Cast from './components/Cast/Cast';
import Reviews from './components/Review/Reviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/:id/cast" element={<Cast />} />
        <Route path="movies/:id/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
