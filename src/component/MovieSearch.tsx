interface MovieSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getMovieListData: () => void;
  getPopularMovies: () => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({
  search,
  setSearch,
  getMovieListData,
  getPopularMovies,
}: any = {}) => {
  return (
    <div className="input">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movies..."
      />
      <button
        onClick={() => {
          if (search.trim() !== "") {
            getMovieListData();
          } else {
            getPopularMovies();
          }
        }}
      >
        Search
      </button>
    </div>
  );
};

export default MovieSearch;
