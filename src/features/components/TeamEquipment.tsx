import { useTeamEquipment } from "./useTeamEquipment";
import styles from "./TeamEquipment.module.scss";

type TeamEquipmentProps = {
  idEquipment: string;
  idTeam: string;
  strSeason: string;
  strEquipment: string;
  strType: string;
  strFilename: string;
}

// Fonction pour extraire le nom de l'équipement depuis l'URL ou le filename
const getEquipmentName = (equipment: string, filename: string): string => {
  if (filename) {
    // Extraire le nom depuis le filename (ex: "133604-Jersey.png" -> "Jersey")
    const name = filename.split('-').pop()?.replace('.png', '').replace('.jpg', '');
    return name || equipment;
  }
  return equipment;
};

// Fonction pour formater le type d'équipement
const formatType = (type: string): string => {
  const typeMap: Record<string, string> = {
    '1st': 'Maillot domicile',
    '2nd': 'Maillot extérieur',
    '3rd': '3e maillot',
    'Goalkeeper': 'Maillot gardien',
    'Training': 'Équipement d\'entraînement',
  };
  return typeMap[type] || type;
};

export default function TeamEquipment({ teamId = 141494, compact = false }: { teamId?: number; compact?: boolean }) {
  const { equipment, loading, error } = useTeamEquipment(teamId)

  // Mode compact pour affichage dans une carte
  if (compact) {
    return (
      <div className={styles.compactContainer}>
        {loading && (
          <div className={styles.compactLoading}>
            <p>Chargement...</p>
          </div>
        )}

        {error && (
          <div className={styles.compactError}>
            <p>Erreur de chargement</p>
          </div>
        )}

        {!loading && !error && equipment.length === 0 && (
          <div className={styles.compactEmpty}>
            <p>Aucun équipement disponible</p>
          </div>
        )}

        {!loading && !error && equipment.length > 0 && (
          <ul className={styles.compactGrid}>
            {equipment.map((item: TeamEquipmentProps) => {
              const equipmentName = getEquipmentName(item.strEquipment, item.strFilename);
              const formattedType = formatType(item.strType);
              
              return (
                <li key={item.idEquipment} className={styles.compactCard}>
                  <span className={styles.compactSeason}>{item.strSeason}</span>
                  {item.strEquipment && (
                    <div className={styles.compactImage}>
                      <img
                        src={item.strEquipment}
                        alt={equipmentName}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <h4 className={styles.compactName}>{equipmentName}</h4>
                  <p className={styles.compactType}>{formattedType}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  // Mode normal (page complète)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Équipements des équipes</h1>
        <p className={styles.subtitle}>
          Découvrez les équipements et matériels des équipes professionnelles
        </p>
      </div>

      <div className={styles.content}>
        {loading && (
          <div className={styles.loadingState}>
            <p>Chargement des équipements...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorState}>
            <p>Erreur lors du chargement des équipements</p>
          </div>
        )}

        {!loading && !error && equipment.length === 0 && (
          <div className={styles.emptyState}>
            <p>Aucun équipement trouvé</p>
          </div>
        )}

        {!loading && !error && equipment.length > 0 && (
          <ul className={styles.equipmentGrid}>
            {equipment.map((item: TeamEquipmentProps) => {
              const equipmentName = getEquipmentName(item.strEquipment, item.strFilename);
              const formattedType = formatType(item.strType);
              
              return (
                <li key={item.idEquipment} className={styles.equipmentCard}>
                  <span className={styles.season}>{item.strSeason}</span>
                  <h3 className={styles.equipmentName}>{equipmentName}</h3>
                  <p className={styles.equipmentType}>{formattedType}</p>
                  {item.strEquipment && (
                    <div className={styles.equipmentImage}>
                      <img
                        src={item.strEquipment}
                        alt={equipmentName}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
