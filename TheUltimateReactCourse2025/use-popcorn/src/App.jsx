import NavBar from "./components/NavBar.jsx";
import {Main} from "./components/Main.jsx";
import {useState} from "react";
import {tempMovieData} from "./assets/TempMovieData.jsx";
import NumResults from "./components/NumResults.jsx";
import Search from "./components/Search.jsx";
import MovieList from "./components/MovieList.jsx";
import Box from "./components/Box.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import WatchedMoviesList from "./components/WatchedMoviesList.jsx";
import {tempWatchedData} from "./assets/TempWatchData.jsx";



export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);


  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={ movies } />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}