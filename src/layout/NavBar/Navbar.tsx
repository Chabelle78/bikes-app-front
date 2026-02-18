import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import menuIcon from "@/assets/images/menu-icon.svg";

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <div className={styles.containerNavbar}>
      <button
        className={styles.menuButton}
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        <img src={menuIcon} alt="" width="24" height="24" />
      </button>
      <div className={styles.brand}>
        <img src="src/assets/images/bikes-app-bg.png" alt="Bikes App logo" />
        <p>L'application de recherche de mon vélo idéal</p>
      </div>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink}>
          Vélos
        </Link>
        <Link to="/teams" className={styles.navLink}>
          Équipes
        </Link>
      </nav>
    </div>
  );
}
