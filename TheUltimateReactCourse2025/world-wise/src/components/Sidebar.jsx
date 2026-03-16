import Logo from "./Logo.jsx";
import Footer from "./Footer.jsx";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav.jsx";

export default function Sidebar() {
  return (
    <div className={ styles.sidebar }>
      <Logo />
      <AppNav />

      <p>List of cities</p>

      <Footer />
    </div>
  )
}