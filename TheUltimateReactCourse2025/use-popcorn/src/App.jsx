import NavBar from "./components/NavBar.jsx";
import {Main} from "./components/Main.jsx";
import {useEffect, useState} from "react";
import {tempMovieData} from "./assets/TempMovieData.jsx";
import NumResults from "./components/NumResults.jsx";
import Search from "./components/Search.jsx";
import MovieList from "./components/MovieList.jsx";
import Box from "./components/Box.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import WatchedMoviesList from "./components/WatchedMoviesList.jsx";
import {tempWatchedData} from "./assets/TempWatchData.jsx";
import {API} from "./assets/Keys.jsx";
import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import MovieDetails from "./components/MovieDetails.jsx";


export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

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
  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API}&s=${query}`,
          { signal: controller.signal });

        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("No movies found");

        setMovies(data.Search);

        setError("");
      } catch (error) {
        if(error.name !== "AbortError"){
          setError(error.message);
        }

      } finally {
        setIsLoading(false);
      }

      if(query.length < 3) {
        setMovies([]);
        setError("")
      }
    }

    fetchMovies();

    return () => {
      controller.abort();
    }
    }, [query]
  );

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