import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import "./Movies.css";
import axios from "./axios";

const Movies = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="list">
      {movies.map((movie) => (
        <MovieList key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default Movies;
