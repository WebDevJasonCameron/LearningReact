import {useEffect} from "react";

export default function Timer({ secondsRemaining, dispatch }) {

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes} : ${seconds} `;
  }


  useEffect(() => {
    const id = setInterval(function() {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);

  }, [ dispatch ]);

  return(
    <div className="timer">
      { formatTime(secondsRemaining) }
    </div>
  )
}