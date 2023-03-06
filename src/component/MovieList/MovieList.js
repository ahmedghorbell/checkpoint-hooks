import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies, inputSearch, selectedRate }) => {
  return (
    <div className='MovieList'>
        {
          movies.filter((movie) => 
          selectedRate!== 0 ?
            (movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
            movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim())) &&
             movie.rate=== selectedRate:
            (movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) ||
            movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim()))
          )
          .map((movie)=> <MovieCard movie={movie} key={movie.id} />)
        }
    </div>
  );
};

export default MovieList;
