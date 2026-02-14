import styles from "./NavBar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.brand}>
        <img src="src/assets/images/bikes-app-bg.png" alt="Bikes App logo" />
        <p>L'application de recherche de mon vélo idéal</p>
      </div>
    </div>
  );
}
