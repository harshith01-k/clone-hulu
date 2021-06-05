import React from "react";
import "./Nav.css";
import requests from "./request";

const Nav = ({ setSelectedOption }) => {
  return (
    <div className="nav_links">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        horror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        romance
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMys)}>mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchScience)}>sci-fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWest)}>westren</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnim)}>animation</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTv)}>Tv movie</h2>
    </div>
  );
};
export default Nav;
