import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import NumResults from "./NumResults.jsx";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      { children }
    </nav>
  )
}