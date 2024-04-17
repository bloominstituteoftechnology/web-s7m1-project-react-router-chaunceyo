import React from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

export default function SavedList(props) {
  const navigate = useNavigate()
 const {id} = props
  
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`}className="saved-movie">{movie.title}</Link>
      ))}
      <div onClick={() => navigate('/')} className="home-button">Home</div>
    </div>
  );
}
