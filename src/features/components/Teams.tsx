import { useState } from "react";
import type { Team } from "@/types/Team";
import TeamEquipment from "./TeamEquipment";
import useTeams from "./useTeams";
import styles from "./Teams.module.scss";

export default function Teams() {
  const { teams, loading, error } = useTeams();
  const [expandedTeamId, setExpandedTeamId] = useState<string | null>(null);

  const toggleEquipment = (teamId: string) => {
    setExpandedTeamId(expandedTeamId === teamId ? null : teamId);
  };

  // Fonction pour générer les couleurs d'équipe
  const getTeamColors = (team: Team) => {
    const color1 = team.strColour1 ? `#${team.strColour1}` : '#475569';
    const color2 = team.strColour2 ? `#${team.strColour2}` : '#64748b';
    return { color1, color2 };
  };

  // Fonction pour formater la capacité du stade
  const formatCapacity = (capacity: string) => {
    if (!capacity || capacity === "0") return "N/A";
    return parseInt(capacity, 10).toLocaleString('fr-FR');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Équipes Professionnelles</h1>
          <p className={styles.subtitle}>
            Découvrez les équipes cyclistes et leurs équipements
          </p>
          {!loading && !error && (
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statIcon}>👥</span>
                <span>{teams.length} équipes</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statIcon}>🌍</span>
                <span>{new Set(teams.map((t: Team) => t.strCountry)).size} pays</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        {loading && (
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p>Chargement des équipes...</p>
          </div>
        )}

        {error && (
          <div className={styles.errorState}>
            <div className={styles.icon}>⚠️</div>
            <p>Erreur lors du chargement des équipes</p>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>{error.message}</p>
          </div>
        )}

        {!loading && !error && teams.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.icon}>🔍</div>
            <p>Aucune équipe trouvée</p>
          </div>
        )}

        {!loading && !error && teams.length > 0 && (
          <ul className={styles.teamsGrid}>
            {teams.map((team: Team) => {
              const colors = getTeamColors(team);
              const isExpanded = expandedTeamId === team.idTeam;

              return (
                <li 
                  key={team.idTeam} 
                  className={styles.teamCard}
                  style={{
                    '--team-color-1': colors.color1,
                    '--team-color-2': colors.color2,
                  } as React.CSSProperties}
                >
                  <div className={styles.teamHeader}>
                    <div className={styles.teamBadge}>
                      {team.strBadge ? (
                        <img
                          src={team.strBadge}
                          alt={`Logo ${team.strTeam}`}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span style={{ fontSize: '40px' }}>🚴</span>
                      )}
                    </div>
                    <h2 className={styles.teamName}>{team.strTeam}</h2>
                  </div>

                  <div className={styles.teamBody}>
                    <div className={styles.teamInfo}>
                      {team.strCountry && (
                        <div className={styles.infoRow}>
                          <span className={styles.infoIcon}>🌍</span>
                          <span className={styles.infoLabel}>Pays</span>
                          <span className={styles.infoValue}>{team.strCountry}</span>
                        </div>
                      )}

                      {team.strStadium && (
                        <div className={styles.infoRow}>
                          <span className={styles.infoIcon}>🏟️</span>
                          <span className={styles.infoLabel}>Stade</span>
                          <span className={styles.infoValue}>{team.strStadium}</span>
                        </div>
                      )}

                      {team.intStadiumCapacity && team.intStadiumCapacity !== "0" && (
                        <div className={styles.infoRow}>
                          <span className={styles.infoIcon}>👥</span>
                          <span className={styles.infoLabel}>Capacité</span>
                          <span className={styles.infoValue}>
                            {formatCapacity(team.intStadiumCapacity)} places
                          </span>
                        </div>
                      )}

                      {team.intFormedYear && team.intFormedYear !== "0" && (
                        <div className={styles.infoRow}>
                          <span className={styles.infoIcon}>📅</span>
                          <span className={styles.infoLabel}>Fondée en</span>
                          <span className={styles.infoValue}>{team.intFormedYear}</span>
                        </div>
                      )}

                      {team.strLeague && (
                        <div className={styles.infoRow}>
                          <span className={styles.infoIcon}>🏅</span>
                          <span className={styles.infoLabel}>Ligue</span>
                          <span className={styles.infoValue}>{team.strLeague}</span>
                        </div>
                      )}
                    </div>

                    <div className={styles.teamActions}>
                      <button
                        className={`${styles.button} ${styles.primary}`}
                        onClick={() => toggleEquipment(team.idTeam)}
                      >
                        <span>{isExpanded ? '👆' : '👇'}</span>
                        <span>{isExpanded ? 'Masquer' : 'Voir équipements'}</span>
                      </button>
                      {team.strWebsite && (
                        <a
                          href={team.strWebsite.startsWith('http') ? team.strWebsite : `https://${team.strWebsite}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${styles.button} ${styles.secondary}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          🌐 Site web
                        </a>
                      )}
                    </div>

                    {isExpanded && (
                      <div className={styles.equipmentSection}>
                        <h3 className={styles.equipmentTitle}>
                          Équipements de l'équipe
                        </h3>
                        <TeamEquipment 
                          teamId={parseInt(team.idTeam, 10)} 
                          compact={true} 
                        />
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
