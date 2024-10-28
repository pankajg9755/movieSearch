import axios from "axios";
import { useEffect, useState } from "react";
import MovieCart from "./component/MoiveCart";
import MovieSearch from "./component/MovieSearch";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface MovieApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

const App = () => {
  const [movieData, setMovieData] = useState<MovieApiResponse | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getPopularMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get<MovieApiResponse>(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=popular`
      );
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getMovieListData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<MovieApiResponse>(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${search}`
      );
      setMovieData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <div className="app">
      <MovieSearch
        search={search}
        setSearch={setSearch}
        getMovieListData={getMovieListData}
        getPopularMovies={getPopularMovies}
      />
      {loading && <div>Loading...</div>}
      <div className="movie-list">
        {movieData?.Search?.map((movie: any) => (
          <MovieCart key={movie.imdbID} movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
