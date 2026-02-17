import styles from "./NotFound.module.scss";

interface NotFoundOptions {
  message: string;
  className?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export default function NotFound({
  message,
  className,
  actionButton,
}: NotFoundOptions) {
  return (
    <div className={`${styles.notFound} ${className || ""}`}>
      <p className={styles.message}>{message}</p>
      {actionButton && (
        <button className={styles.actionButton} onClick={actionButton.onClick}>
          {actionButton.label}
        </button>
      )}
    </div>
  );
}
