import React, { useEffect, useState } from "react";

import "./App.css";
// Components
import Movie from "./components/Movie/Movie.component";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const Featured_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8253b7d943722fbd00d238ba47cc2bd7";
  const API =
    "https://api.themoviedb.org/3/movie/550?api_key=8253b7d943722fbd00d238ba47cc2bd7";
  const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=8253b7d943722fbd00d238ba47cc2bd7&query=";

  const featureApi = async () => {
    fetch(Featured_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const searchApi = async () => {
    fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    featureApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchApi();
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 ">
          <input
            onChange={handleOnChange}
            type="text"
            className=" form-control form-control-lg"
            placeholder="Search Movies"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn "
            type="button"
            id="button-addon2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <section className=" container d-flex flex-wrap justify-content-around">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
}

export default App;
