import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { selectBikeById } from "@/features/bikesSlice";
import styles from "./BikeDetails.module.scss";

export default function BikeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bike = useAppSelector((state) => selectBikeById(state, id!));

  if (!bike) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Vélo non trouvé</h1>
          <p>Le vélo demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        onClick={() => navigate(-1)}
        aria-label="Retour"
      >
        <span> ⬅️ Retour</span>
      </button>

      <div className={styles.bikeDetails}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            {bike.image_url ? (
              <img src={bike.image_url} alt={bike.name} />
            ) : (
              <div className={styles.placeholderImage}>🚴</div>
            )}
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.header}>
            <h1 className={styles.title}>{bike.name}</h1>
            <p className={styles.brand}>{bike.brand.name}</p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Type</div>
              <div className={styles.infoValue}>{bike.riding_type}</div>
            </div>

            {bike.frame_material && (
              <div className={styles.infoCard}>
                <div className={styles.infoLabel}>Matériau</div>
                <div className={styles.infoValue}>{bike.frame_material}</div>
              </div>
            )}

            {bike.color && (
              <div className={styles.infoCard}>
                <div className={styles.infoLabel}>Couleur</div>
                <div className={styles.infoValue}>{bike.color}</div>
              </div>
            )}

            {bike.weight && (
              <div className={styles.infoCard}>
                <div className={styles.infoLabel}>Poids</div>
                <div className={styles.infoValue}>{bike.weight}</div>
              </div>
            )}

            {bike.wheel_type && (
              <div className={styles.infoCard}>
                <div className={styles.infoLabel}>Roues</div>
                <div className={styles.infoValue}>{bike.wheel_type}</div>
              </div>
            )}
          </div>

          {bike.description && (
            <div className={styles.description}>
              <p>{bike.description}</p>
            </div>
          )}

          {bike.features && bike.features.length > 0 && (
            <div className={styles.features}>
              <h2 className={styles.featuresTitle}>Caractéristiques</h2>
              <div className={styles.featuresList}>
                {bike.features.map((feature, index) => (
                  <span key={index} className={styles.featureTag}>
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
