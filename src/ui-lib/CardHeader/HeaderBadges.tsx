import type { CardBadge } from "../Card/Card";
import styles from "./HeaderBadges.module.scss";

interface HeaderBadgesProps {
  imageSrc?: string;
  type?: string; // Catégorie ou type
  badge?: CardBadge; // Badge générique (marque, équipe, club, etc.)
}

export default function HeaderBadges({
  imageSrc,
  type,
  badge,
}: HeaderBadgesProps) {
  return (
    <div className={styles.headerBadges}>
      {imageSrc && <img src={imageSrc} alt={`${badge?.name || ''} ${type || ''}`} />}
      {type && <span className={styles.type}>{type}</span>}
      {badge && <span className={styles.brand}>{badge.name}</span>}
    </div>
  );
}
