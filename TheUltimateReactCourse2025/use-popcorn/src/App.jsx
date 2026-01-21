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


export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const query = "interstellar"

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API}&s=${query}`)
      const data = await res.json();
      setMovies(data.Search)
      setIsLoading(false);
    }
    fetchMovies();
    }, []
  );

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading? <Loader /> : <MovieList movies={movies}/>}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}