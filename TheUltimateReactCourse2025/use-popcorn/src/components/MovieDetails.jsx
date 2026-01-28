import {useEffect, useState} from "react";
import {API} from "../assets/Keys.jsx";
import StarRating from "./StarRating.jsx";
import Loader from "./Loader.jsx";

export default function MovieDetails({ selectedId, onCloseMovie, onAddWatched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre} = movie;

  function handleAdd() {
    const newWatchedMovie = {
        imdbID: selectedId,
        Title: title,
        Year: year,
        Poster: poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
    }

    onAddWatched(newWatchedMovie);
  }

  useEffect(() => {
     async function getMovieDetails() {
       setIsLoading(true);
       const res = await fetch(
         `http://www.omdbapi.com/?apikey=${API}&i=${selectedId}`
       );
       const data = await res.json();
       setMovie(data);
     }
     getMovieDetails();
     setIsLoading(false);
  }, [selectedId] );

  return (
      <div className="details">
        {
          isLoading ?
            <Loader /> :
            <>
              <header>
                <button className="btn-back"
                        onClick={onCloseMovie}>
                  &larr;
                </button>
                <img src={ poster } alt={`Poster of ${movie} movie`} />
                <div className="details-overview">
                  <h2>
                    { title }
                  </h2>
                  <p>
                    { genre }
                  </p>
                  <p>
                    <span>⭐️</span>{imdbRating} IMDb rating
                  </p>
                </div>
              </header>

              <section>
                <div className="rating">
                  <StarRating maxRating={10} size={32} />

                  <button className="btn-add"
                          onClick={ handleAdd } >
                    + Add to list
                  </button>
                </div>
                <p><em>{plot}</em></p>
                <p>Starring {actors}</p>
                <p>Directed by {director}</p>
              </section>
            </>
        }

      </div>
  )
}