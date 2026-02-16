import styles from './FilterTag.module.scss';

interface FilterTagProps {
  label: string;
  value: string;
  onRemove: () => void;
}

export default function FilterTag({ label, value, onRemove }: FilterTagProps) {
  return (
    <div className={styles.filterTag}>
      <span className={styles.filterLabel}>{label}:</span>
      <span className={styles.filterValue}>{value}</span>
      <button
        className={styles.removeButton}
        onClick={onRemove}
        aria-label={`Supprimer le filtre ${label}`}
      >
        ×
      </button>
    </div>
  );
}
