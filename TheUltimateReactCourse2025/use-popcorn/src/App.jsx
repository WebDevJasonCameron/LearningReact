import NavBar from "./components/NavBar.jsx";
import {Main} from "./components/Main.jsx";
import {useState} from "react";
import {tempMovieData} from "./assets/TempMovieData.jsx";



export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar />
      <Main movies={movies} />
    </>
  );
}