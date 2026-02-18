import type { CardSpec } from "../Card/Card";
import styles from "./Footer.module.scss";

interface FooterProps {
  info?: CardSpec[]; // Informations génériques à afficher
  onClick?: () => void;
}

export default function Footer({ info = [], onClick }: FooterProps) {
  return (
    <div className={styles.footer}>
      {info.map((item, index) => (
        <div key={index}>
          {item.label && <span>{item.label}: </span>}
          {item.value}
        </div>
      ))}
      <button onClick={onClick}>Détails</button>
    </div>
  );
}
