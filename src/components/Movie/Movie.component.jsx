import React from "react";
import "./Movie.style.css";
const Movie = ({ title, poster_path, overview, vote_average }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="card mt-5 shadow-lg  rounded " style={{ width: "18rem" }}>
      <img src={IMG_API + poster_path} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-wrap  justify-content-between">
        <h5 className="card-title">{title}</h5>

        <h5>{vote_average}</h5>
      </div>

      <section className="overview">
        <p>{overview}</p>
      </section>
    </div>
  );
};

export default Movie;
