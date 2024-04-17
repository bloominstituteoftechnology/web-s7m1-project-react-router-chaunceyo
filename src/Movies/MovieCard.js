import React from 'react';
import Movie from './Movie';
import MovieList from './MovieList'
import {Link, useNavigate} from 'react-router-dom'

const onMovieClick = id => () => {
  const navigate = useNavigate()
  navigate(`movies/${id}`)
}

export default function MovieCard (props) {
 const {movie, onMovieClick} = props
  return(

<div>
    <h2>{movie.title}</h2>
    <div className="movie-director">
      Director: <em>{movie.director}</em>
    </div>
    <div className="movie-metascore">
      Metascore: <strong>{movie.metascore}</strong>
    </div>
</div>
  )
}
