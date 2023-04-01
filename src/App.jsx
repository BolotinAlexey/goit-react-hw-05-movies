import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<p>fsfsfaafsf</p>} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
