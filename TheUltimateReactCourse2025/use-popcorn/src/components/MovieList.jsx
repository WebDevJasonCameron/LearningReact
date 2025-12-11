import {useState} from "react";
import {tempMovieData} from "../assets/TempMovieData.jsx";
import Movie from "./Movie.jsx";


export default function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>

  )
}