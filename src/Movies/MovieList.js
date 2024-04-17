import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const navigate = useNavigate()
  const onMovieClick = id => () => {
    navigate(`movies/${id}`)
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails 
          link ={<Link to={`movies/${movie.id}`}>details</Link>}
          onMovieClick={onMovieClick(movie.id)} 
          key={movie.id} 
          movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const {onMovieClick, link, movie} = props

  return (
    <div>
      <div className="movie-card" onClick={() => onMovieClick(movie.id)}>
      <MovieCard movie={movie} onMovieClick={onMovieClick} />
      {link}
      </div>
   </div>
  );
}
