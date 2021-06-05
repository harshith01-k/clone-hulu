import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import "./MovieList.css";
const baseURL = `https://image.tmdb.org/t/p/original/`;

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + " ... " : str;
}

const MovieList = ({ movie }) => {
  return (
    <div className="movie-container">
      {console.log(`movies is : ${movie?.title}`)}
      <img
        src={
          `${baseURL}${movie.backdrop_path}` ||
          `${baseURL}${movie.poster_path}  `
        }
        alt="an another pic"
      />
      {console.log(`${baseURL}${movie?.backdrop_path}`)}
      <p>{truncate(movie?.overview, 100)}</p>
      <h2>{movie.original_title || movie.title || movie.original_name}</h2>
      <p className="di">
        {movie.release_date} <ThumbUpAltIcon /> {movie.vote_count}
      </p>
      <p className="di">Rating : {movie.vote_average}</p>
    </div>
  );
};
export default MovieList;
