import styles from "./Description.module.scss";

interface DescriptionProps {
  title?: string;
  description?: string;
  weight?: string;
  wheel?: string;
}

export default function Description({
  title,
  description,
  weight,
  wheel,
}: DescriptionProps) {
  return (
    <div className={styles.description}>
      {(weight || wheel) && (
        <div className={styles.specs}>
          {weight && (
            <div className={styles.spec}>
              <span className={styles.weightIcon}></span>
              <strong>{weight}</strong>
            </div>
          )}
          {wheel && (
            <div className={styles.spec}>
              <span className={styles.wheelIcon}></span>
              <strong>{wheel}</strong>
            </div>
          )}
        </div>
      )}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}
