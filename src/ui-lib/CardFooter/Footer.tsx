import styles from "./Footer.module.scss";

interface FooterProps {
  color?: string;
  wheel?: string;
  onClick?: () => void;
}

export default function Footer({ color, wheel, onClick }: FooterProps) {
  return (
    <div className={styles.footer}>
      {color && <div> {color}</div>}
      {wheel && <div> {wheel}</div>}
      <button onClick={onClick}>Détails</button>
    </div>
  );
}
