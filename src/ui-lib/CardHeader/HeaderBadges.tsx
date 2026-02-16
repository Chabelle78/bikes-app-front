import type { Brand } from "@/types/Brand";
import styles from "./HeaderBadges.module.scss";

interface HeaderBadgesProps {
  imageSrc?: string;
  type?: string;
  brand?: Brand;
}

export default function HeaderBadges({
  imageSrc,
  type,
  brand,
}: HeaderBadgesProps) {
  return (
    <div className={styles.headerBadges}>
      {imageSrc && <img src={imageSrc} alt={`${brand} ${type}`} />}
      {type && <span className={styles.type}>{type}</span>}
      {brand && <span className={styles.brand}>{brand.name}</span>}
    </div>
  );
}
