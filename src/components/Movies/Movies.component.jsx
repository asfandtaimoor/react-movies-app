// Components
import Movie from "../Movie/Movie.component";
const Movies = (moviesArray) => {
  console.log(moviesArray);
  return (
    <div>
      {moviesArray.length > 0 &&
        moviesArray.map((movie) => <Movie key={movie.id} data={movie} />)}
    </div>
  );
};

export default Movies;
