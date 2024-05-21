import React, { useState } from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const addToWatchlist = () => {
    // Implement the functionality to add the movie to the watchlist
    console.log('Added to watchlist:', Title);
  };


  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
        <button className="watchlist-btn" onClick={addToWatchlist}>Watch Later</button>
      </div>
      

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;