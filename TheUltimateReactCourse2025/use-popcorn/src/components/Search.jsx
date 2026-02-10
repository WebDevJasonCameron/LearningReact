import {useEffect, useRef} from "react";

export default function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
    console.log(inputElement.current)
  }, [])

  return (
    <input
      className="search"
      id="search-input"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  )
}