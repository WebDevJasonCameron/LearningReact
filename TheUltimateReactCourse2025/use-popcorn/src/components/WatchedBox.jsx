import {useState} from "react";
import {tempWatchedData} from "../assets/TempWatchData.jsx";
import WatchedSummary from "./WatchedSummary.jsx";
import WatchedMoviesList from "./WatchedMoviesList.jsx";

export default function WatchedBox({ children }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        children
      )}
    </div>
  )
}