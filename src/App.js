import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          setMovies(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    let savedAlready = false
    saved.map(movie => {
      movie.id === id? savedAlready = true: savedAlready = false
    })
    
    return savedAlready? setSaved([...saved]) :setSaved([...saved, movies[id - 1]])
  }


  return (
    <div>
      <SavedList list={[...saved]}/>
    <Routes>
     <Route path='/' element={<MovieList movies={movies}/>}></Route>&nbsp;
     <Route path='movies/:id' element={<Movie addToSavedList={addToSavedList}/>}></Route>&nbsp;
     </Routes>
    </div>
  );
}
