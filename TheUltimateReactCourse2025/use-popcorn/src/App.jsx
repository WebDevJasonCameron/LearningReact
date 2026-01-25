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


export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const tempQuery = "interstellar"

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API}&s=${tempQuery}`)

        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json();
        if (data.Response === "False") throw new Error("No movies found")

        setMovies(data.Search)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
    }, []
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
            !isLoading && !error && <MovieList movies={movies}/>
          }
          {
            error && <ErrorMessage message={error} />
          }
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}