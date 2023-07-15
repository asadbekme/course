const MovieCard = (props) => {
  return (
    <div className="movie">
      <h4 className="movie__name">{props.name}</h4>
      <img src={props.imgUrl} alt="Movie image" />
      <p className="movie__liked">{props.liked}</p>
      <p className="movie__date">{props.date}</p>
      Test
    </div>
  );
};

export default MovieCard;
