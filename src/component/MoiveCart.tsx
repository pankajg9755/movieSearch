interface MovieCartProps {
  movieData: {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  };
}
const MovieCart: React.FC<MovieCartProps> = ({ movieData }) => {
  return (
    <div className="movie-item">
      <img src={movieData.Poster} alt={movieData.Title} />
      <h4>{movieData.Title}</h4>
      <p>{movieData.Year}</p>
      <p>{movieData.Type}</p>
      <a href={`https://www.imdb.com/title/${movieData.imdbID}`} target="_blank">
        View
      </a>
    </div>
  );
};

export default MovieCart;
