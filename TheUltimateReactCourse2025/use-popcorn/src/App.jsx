import NavBar from "./components/NavBar.jsx";
import {Main} from "./components/Main.jsx";
import {useState} from "react";
import NumResults from "./components/NumResults.jsx";
import Search from "./components/Search.jsx";
import MovieList from "./components/MovieList.jsx";
import Box from "./components/Box.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import WatchedMoviesList from "./components/WatchedMoviesList.jsx";
import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import {useMovies} from "./customHook/useMovies.jsx";
import {useLocalStorageState} from "./customHook/useLocalStorageState.jsx";


export default function App() {

  /**
   * USs
   */
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");


  /**
   * CEs
   */
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [ watched, setWatched ] = useLocalStorageState([]);

  /**
   * HANDs
   */
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  function handleAddWatched(movie) {
    setWatched((watched) =>
      watched.some((m) => m.imdbID === movie.imdbID) ? watched : [...watched, movie]
    );
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter(movie => movie.imdbID !== id))
  }


  return (
    <>
      <NavBar>
        <Search query={query}
                setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {
            isLoading && <Loader />
          }
          {
            !isLoading && !error && <MovieList movies={movies}
                                               onSelectMovie={ handleSelectMovie }/>
          }
          {
            error && <ErrorMessage message={error} />
          }
        </Box>
        <Box>
          {
            selectedId ? <MovieDetails selectedId={ selectedId }
                                       onCloseMovie={ handleCloseMovie }
                                       onAddWatched={ handleAddWatched }
                                       watched={ watched } /> :
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched}
                                   onDeleteWatched={handleDeleteWatched} />
              </>
          }
        </Box>
      </Main>
    </>
  );
}