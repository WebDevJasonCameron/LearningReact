import NextButton from "./NextButton.jsx";
import Timer from "./Timer.jsx";

export default function Footer({ secondsRemaining, dispatch, children }) {
  return (
    <>
      <Timer secondsRemaining={ secondsRemaining }
             dispatch={ dispatch } />
      { children }
    </>
  )
}