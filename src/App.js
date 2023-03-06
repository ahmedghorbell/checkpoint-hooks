import React, { useState } from 'react';
import { moviesData } from './Data.js';
import MovieList from './component/MovieList/MovieList';
import Navigation from './component/Navigation/Navigation';
import './App.css';
import AddMovie from './component/AddMovie/AddMovie.js';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState('');
  const [selectedRate, setSelectedRate] = useState(0);

  const add = (newMovie) => {
    setMovies([...movies,newMovie])
  }

  const resetFilter = () => {
    setInputSearch('');
    setSelectedRate(0);
  }

  return (
    <div className="App">
      <Navigation
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        resetFilter={resetFilter}
      />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} selectedRate={selectedRate} />
    </div>
  );
}

export default App;
