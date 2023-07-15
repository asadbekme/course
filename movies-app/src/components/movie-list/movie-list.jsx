import { movies } from "../../constants/movies";
import { MovieCard } from "../index";

const MovieList = () => {
  return (
    <div className="movies">
      {movies.map((movie, index) => {
        return (
          <MovieCard
            // movie={movie}
            key={index}
            name={movie.name}
            imgUrl={movie.imageUrl}
            liked={movie.liked}
            date={movie.releaseDate}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
