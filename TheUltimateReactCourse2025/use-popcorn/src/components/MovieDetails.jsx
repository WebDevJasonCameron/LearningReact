import {useEffect, useRef, useState} from "react";
import {API} from "../assets/Keys.jsx";
import StarRating from "./StarRating.jsx";
import Loader from "./Loader.jsx";
import {useKey} from "../customHook/useKey.jsx";

export default function MovieDetails({ selectedId,
                                       onCloseMovie,
                                       onAddWatched,
                                       watched}) {

  /**
   * VARs
   */
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  /**
   * REFs
   */
  const countRef = useRef(0);

  /**
   * VARs
   */
  const isWatched = watched.some((m) => m.imdbID === selectedId);
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

  /**
   * OBJs
   */
  const {Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Actors: actors, Director: director, Genre: genre} = movie;

  /**
   * FUNs
   */
  function handleAdd() {
    const newWatchedMovie = {
        imdbID: selectedId,
        Title: title,
        Year: year,
        Poster: poster,
        imdbRating: Number(imdbRating),
        runtime: Number(runtime.split(" ").at(0)),
        userRating,
      countRatingDecisions: countRef.current,
    }

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  /**
   * UEs
   */
  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

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

  useEffect(() => {
    if(!title) return;
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "use-popcorn";
    }
  },
    [title])

  /**
   * CH
   */
  useKey("escape", onCloseMovie)


  /**
   * RET
   */
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
                  {
                    !isWatched ?
                    (<>
                      <StarRating maxRating={10}
                                  size={32}
                                  onSetRating={setUserRating} />
                      {
                        userRating > 0 && (
                          <button className="btn-add"
                                  onClick={ handleAdd } >
                            + Add to list
                          </button>
                        )
                      }
                    </>) :
                    (<p>
                      You rated with movie {watchedUserRating} <span>⭐️</span>
                    </p>)
                  }

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