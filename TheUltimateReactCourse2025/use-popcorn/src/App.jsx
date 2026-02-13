import NavBar from "./components/NavBar.jsx";
import {Main} from "./components/Main.jsx";
import {useEffect, useState} from "react";
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


export default function App() {

  /**
   * USs
   */
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  const [watched, setWatched] = useState(() => {            // Pulls in the data from local storage
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });


  /**
   * CEs
   */
  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

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

  /**
   * UEs
   */
  useEffect(() => {                                               // Store into local memory0.````
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])



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