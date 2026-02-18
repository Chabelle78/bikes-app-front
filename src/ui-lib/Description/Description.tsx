import type { CardSpec } from "../Card/Card";
import styles from "./Description.module.scss";

interface DescriptionProps {
  title?: string;
  description?: string;
  specs?: CardSpec[]; // Caractéristiques génériques
}

export default function Description({
  title,
  description,
  specs = [],
}: DescriptionProps) {
  return (
    <div className={styles.description}>
      {specs.length > 0 && (
        <div className={styles.specs}>
          {specs.map((spec, index) => (
            <div key={index} className={styles.spec}>
              {spec.icon && <span className={styles[spec.icon]}></span>}
              {spec.label && <span>{spec.label}: </span>}
              <strong>{spec.value}</strong>
            </div>
          ))}
        </div>
      )}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}
