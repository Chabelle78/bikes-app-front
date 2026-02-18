import { Description, HeaderBadges, Footer } from "@/ui-lib";

import styles from "./Card.module.scss";

export interface CardSpec {
  icon?: string;
  label?: string;
  value: string;
}

export interface CardBadge {
  name: string;
  image?: string;
}

interface CardProps {
  id: string;
  imageSrc?: string;
  category?: string;
  badge?: CardBadge;
  title?: string;
  description?: string;
  specs?: CardSpec[];
  footerInfo?: CardSpec[];
  onClick?: (id: string) => void;
}

export function Card({
  id,
  imageSrc,
  category,
  badge,
  title,
  description,
  specs = [],
  footerInfo = [],
  onClick,
}: CardProps) {
  return (
    <div className={styles.bikeCard}>
      <HeaderBadges imageSrc={imageSrc} type={category} badge={badge} />
      <Description title={title} description={description} specs={specs} />
      <Footer info={footerInfo} onClick={() => onClick?.(id)} />
    </div>
  );
}
