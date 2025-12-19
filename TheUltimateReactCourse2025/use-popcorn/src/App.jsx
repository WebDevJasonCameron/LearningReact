import NavBar from "./components/NavBar.jsx";
import {Main} from "./components/Main.jsx";
import {useState} from "react";
import {tempMovieData} from "./assets/TempMovieData.jsx";
import NumResults from "./components/NumResults.jsx";
import Search from "./components/Search.jsx";
import ListBox from "./components/ListBox.jsx";
import WatchedBox from "./components/WatchedBox.jsx";
import MovieList from "./components/MovieList.jsx";



export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox>
          <MovieList movies={ movies } />
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}