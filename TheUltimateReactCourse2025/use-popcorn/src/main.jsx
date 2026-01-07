import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from "./components/StarRating.jsx";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/>
    <StarRating maxRating={5} size={20} color="red" defaultRating={3}/>
    {/*<App />*/}
  </StrictMode>,
)
