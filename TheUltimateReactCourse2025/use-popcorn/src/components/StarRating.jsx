import Star from "./Star.jsx";
import {useState} from "react";

/*
STYLEs
 */
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}

const starContainerStyle = {
  display: 'flex',
}

const textStyle = {
  lineHeight: '1',
  margin: '0'
}

/*
COMPONENT
 */
export default function StarRating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
         <Star key={i} onRate={() => handleRating(i + 1)} />
        ))}
      </div>
      <p style={textStyle}>{rating || ""}</p>
    </div>
  )
}