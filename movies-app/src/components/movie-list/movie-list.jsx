import { movies } from "../../constants/movies";
import MovieCard from "../movie-card/movie-card";

const MovieList = () => {
  // console.log(movies);
  return (
    <div className="movies">
      {movies.map((movie, index) => {
        <MovieCard
          key={index}
          name={movie.name}
          imgUrl={movie.imageUrl}
          liked={movie.liked}
          date={movie.releaseDate}
        />;
      })}
    </div>
  );
};

export default MovieList;
