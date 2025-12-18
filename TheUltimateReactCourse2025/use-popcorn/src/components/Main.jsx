import ListBox from "./ListBox.jsx";
import WatchedBox from "./WatchedBox.jsx";

export function Main({ movies }) {

  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox />
    </main>
  )
}