import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = (props) => (
  
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie"><Link to={`/movies/${movie.id}`}>{movie.title}</Link></span>
    ))}
    <div>
    <div className="home-button"><Link to='/'>Home</Link></div>
    <div onClick={() =>{
      props.clearSaveList()
    }} className="x-button">Clear</div>
    </div>
    
  </div>
);

export default SavedList;
