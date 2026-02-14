import MultiOptions from "../MultiOptions/MultiOptions";

import styles from "./Filters.module.scss";

export default function Filters() {
  const brands = [
    "Trek",
    "Specialized",
    "Cannondale",
    "Giant",
    "Scott",
    "Bianchi",
  ];
  const types = ["Route", "VTT", "Gravel", "Ville", "Électrique"];
  const colors = ["Noir", "Blanc", "Rouge", "Bleu", "Vert", "Jaune"];
  return (
    <div className={styles.multiOptionsContainer}>
      <MultiOptions title="Marque" icon="🏷️" options={brands} />
      <MultiOptions title="Type de vélo" icon="🚴" options={types} />
      <MultiOptions title="Couleur" icon="🎨" options={colors} />
    </div>
  );
}
