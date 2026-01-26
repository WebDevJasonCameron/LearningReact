import {useEffect, useState} from "react";
import {API} from "../assets/Keys.jsx";
import StarRating from "./StarRating.jsx";

export default function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});

  const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre} = movie;

  console.log(title, year)

  useEffect(() => {
     async function getMovieDetails() {
       const res = await fetch(
         `http://www.omdbapi.com/?apikey=${API}&i=${selectedId}`
       );
       const data = await res.json();
       setMovie(data);
     }
     getMovieDetails();
  }, [selectedId]);

  return (
      <div className="details">
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
          </div>
          <p><em>{plot}</em></p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </div>
  )
}