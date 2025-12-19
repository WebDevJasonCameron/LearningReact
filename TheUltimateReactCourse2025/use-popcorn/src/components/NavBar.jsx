import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import NumResults from "./NumResults.jsx";

export default function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  )
}